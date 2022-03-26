import cdk = require('@aws-cdk/core');
import iam = require('@aws-cdk/aws-iam');
import lambda = require('@aws-cdk/aws-lambda');
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import dynamodb = require('@aws-cdk/aws-dynamodb');
import apigateway = require('@aws-cdk/aws-apigateway');
import { AuthorizationType, Cors, Period } from '@aws-cdk/aws-apigateway';
import { PolicyStatement } from '@aws-cdk/aws-iam';
import { Configuration } from './configuration';
import { ILayerVersion } from '@aws-cdk/aws-lambda/lib/layers';

const corsOptions = {
  allowOrigins: Cors.ALL_ORIGINS,
  allowMethods: Cors.ALL_METHODS,
  allowCredentials: true,
  allowHeaders: Cors.DEFAULT_HEADERS,
  statusCode: 200,
};

export class BaseStack extends cdk.Stack {
  protected zipFileLocation: string;
  protected config: Configuration;
  protected apiName: string;
  protected stageName: string;
  protected api: apigateway.RestApi;
  private secretsPolicy: PolicyStatement;
  private dynamoAccess: PolicyStatement;
  private cognitoAccess: PolicyStatement;
  private sqsAccess: PolicyStatement;

  constructor(
    scope: cdk.Construct,
    id: string,
    stageName: string,
    config: Configuration,
  ) {
    super(scope, id, { env: config.env });

    this.config = config;
    // this.zipFileLocation = path.join(__dirname, "../../../dist/LambdaPackage.zip");
    this.apiName = 'sample-api';
    this.stageName = stageName;
  }

  protected createApiGateway() {
    const api = new apigateway.RestApi(this, this.apiName, {
      restApiName: this.apiName,
      deployOptions: {
        stageName: this.stageName,
      },
      defaultCorsPreflightOptions: corsOptions,
    });
    return api;
  }

  protected createLambdaLayer(id: string, fromAssetPath: string,
  ): lambda.LayerVersion {
    return new lambda.LayerVersion(this, id, {
      code: lambda.Code.fromAsset(fromAssetPath),
      compatibleRuntimes: [
        lambda.Runtime.NODEJS_12_X,
        lambda.Runtime.NODEJS_10_X,
      ],
    });
  }

  protected createLambda(
    id: string,
    handler: string,
    fromAssetPath: string,
    layers?: ILayerVersion[],
  ): lambda.Function {
    return new lambda.Function(this, id, {
      handler: handler,
      functionName: `${this.apiName}-${id}`,
      code: lambda.Code.fromAsset(fromAssetPath),
      runtime: lambda.Runtime.NODEJS_12_X,
      layers: layers,
      timeout: cdk.Duration.seconds(60),
      memorySize: 1024,
      environment: {
        stageName: this.config.deployedEnvironment,
        NODE_PATH: '$NODE_PATH:/opt',
      },
    });
  }

  protected createPolicyStatementForSecrets() {
    // see https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecretsmanager.html
    const secretsPolicy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
    });
    secretsPolicy.addActions('secretsmanager:GetSecretValue');
    secretsPolicy.addResources('*');
    return secretsPolicy;
  }

  protected integrate(
    method: string,
    apiResource: apigateway.IResource,
    lambdaFunc: lambda.Function,
  ) {
    const integration = new apigateway.LambdaIntegration(lambdaFunc);
    apiResource.addMethod(method, integration, {
      authorizationType: AuthorizationType.COGNITO,
      // authorizer: { authorizerId: this.auth.ref },
    });
  }

  protected unsecuredIntegration(
    method: string,
    apiResource: apigateway.IResource,
    lambdaFunc: lambda.Function,
    keyName: string,
  ) {
    const integration = new apigateway.LambdaIntegration(lambdaFunc);
    const resourceMethod = apiResource.addMethod(method, integration, {
      authorizationType: AuthorizationType.NONE,
    });

    const rateLimitingKey = this.api.addApiKey(`${keyName}-key`);
    resourceMethod.restApi.addUsagePlan(`${keyName}-usage-plan`, {
      name: keyName,
      apiKey: rateLimitingKey,
      quota: { limit: 1000, period: Period.MONTH },
      throttle: { rateLimit: 1, burstLimit: 1 }, //1 request per second limit or return 429 Too Many Requests
      apiStages: [{ api: this.api, stage: this.api.deploymentStage }],
    });
  }

  protected grantSecrets(lambda: lambda.Function) {
    lambda.addToRolePolicy(this.secretsPolicy);
  }

  private createDbPolicyWithArn(tableArn: string) {
    if (!this.dynamoAccess) {
      this.dynamoAccess = new PolicyStatement({
        resources: [tableArn],
        actions: [
          'dynamodb:BatchGetItem',
          'dynamodb:BatchWriteItem',
          'dynamodb:PutItem',
          'dynamodb:DeleteItem',
          'dynamodb:GetShardIterator',
          'dynamodb:GetItem',
          'dynamodb:Scan',
          'dynamodb:Query',
          'dynamodb:UpdateItem',
          'dynamodb:DescribeTable',
          'dynamodb:GetRecords',
        ],
      });
    }
    return this.dynamoAccess;
  }

  protected grantDynamoDbAccessToLambda(
    table: dynamodb.Table,
    lambda: lambda.Function,
  ) {
    lambda.addToRolePolicy(this.createDbPolicyWithArn(table.tableArn));
  }

  protected createPolicyStatementForSqs() {
    // see https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazonsqs.html
    if (!this.sqsAccess) {
      this.sqsAccess = new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        resources: [this.config.notificationSqsArn],
        actions: [
          'sqs:SendMessage',
          'sqs:SendMessageBatch',
          'sqs:GetQueueAttributes',
          'sqs:GetQueueUrl',
        ],
      });
    }
    return this.sqsAccess;
  }

  protected createCognitoAdminPolicy(): PolicyStatement {
    if (!this.cognitoAccess) {
      this.cognitoAccess = new PolicyStatement({
        resources: ['*'],
        actions: [
          'cognito-idp:AdminSetUserPassword',
          'cognito-idp:AdminConfirmSignUp',
          'cognito-idp:AdminCreateUser',
          'cognito-idp:AdminGetUser',
          'cognito-identity:*',
        ],
      });
    }

    return this.cognitoAccess;
  }
}
