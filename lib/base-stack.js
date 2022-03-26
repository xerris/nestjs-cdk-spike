"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStack = void 0;
const cdk = require("@aws-cdk/core");
const iam = require("@aws-cdk/aws-iam");
const lambda = require("@aws-cdk/aws-lambda");
const apigateway = require("@aws-cdk/aws-apigateway");
const aws_apigateway_1 = require("@aws-cdk/aws-apigateway");
const aws_iam_1 = require("@aws-cdk/aws-iam");
const corsOptions = {
    allowOrigins: aws_apigateway_1.Cors.ALL_ORIGINS,
    allowMethods: aws_apigateway_1.Cors.ALL_METHODS,
    allowCredentials: true,
    allowHeaders: aws_apigateway_1.Cors.DEFAULT_HEADERS,
    statusCode: 200,
};
class BaseStack extends cdk.Stack {
    constructor(scope, id, stageName, config) {
        super(scope, id, { env: config.env });
        this.config = config;
        // this.zipFileLocation = path.join(__dirname, "../../../dist/LambdaPackage.zip");
        this.apiName = 'sample-api';
        this.stageName = stageName;
    }
    createApiGateway() {
        const api = new apigateway.RestApi(this, this.apiName, {
            restApiName: this.apiName,
            deployOptions: {
                stageName: this.stageName,
            },
            defaultCorsPreflightOptions: corsOptions,
        });
        return api;
    }
    createLambdaLayer(id, fromAssetPath) {
        return new lambda.LayerVersion(this, id, {
            code: lambda.Code.fromAsset(fromAssetPath),
            compatibleRuntimes: [
                lambda.Runtime.NODEJS_12_X,
                lambda.Runtime.NODEJS_10_X,
            ],
        });
    }
    createLambda(id, handler, fromAssetPath, layers) {
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
    createPolicyStatementForSecrets() {
        // see https://docs.aws.amazon.com/IAM/latest/UserGuide/list_awssecretsmanager.html
        const secretsPolicy = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
        });
        secretsPolicy.addActions('secretsmanager:GetSecretValue');
        secretsPolicy.addResources('*');
        return secretsPolicy;
    }
    integrate(method, apiResource, lambdaFunc) {
        const integration = new apigateway.LambdaIntegration(lambdaFunc);
        apiResource.addMethod(method, integration, {
            authorizationType: aws_apigateway_1.AuthorizationType.COGNITO,
            // authorizer: { authorizerId: this.auth.ref },
        });
    }
    unsecuredIntegration(method, apiResource, lambdaFunc, keyName) {
        const integration = new apigateway.LambdaIntegration(lambdaFunc);
        const resourceMethod = apiResource.addMethod(method, integration, {
            authorizationType: aws_apigateway_1.AuthorizationType.NONE,
        });
        const rateLimitingKey = this.api.addApiKey(`${keyName}-key`);
        resourceMethod.restApi.addUsagePlan(`${keyName}-usage-plan`, {
            name: keyName,
            apiKey: rateLimitingKey,
            quota: { limit: 1000, period: aws_apigateway_1.Period.MONTH },
            throttle: { rateLimit: 1, burstLimit: 1 },
            apiStages: [{ api: this.api, stage: this.api.deploymentStage }],
        });
    }
    grantSecrets(lambda) {
        lambda.addToRolePolicy(this.secretsPolicy);
    }
    createDbPolicyWithArn(tableArn) {
        if (!this.dynamoAccess) {
            this.dynamoAccess = new aws_iam_1.PolicyStatement({
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
    grantDynamoDbAccessToLambda(table, lambda) {
        lambda.addToRolePolicy(this.createDbPolicyWithArn(table.tableArn));
    }
    createPolicyStatementForSqs() {
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
    createCognitoAdminPolicy() {
        if (!this.cognitoAccess) {
            this.cognitoAccess = new aws_iam_1.PolicyStatement({
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
exports.BaseStack = BaseStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2Utc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNDO0FBQ3RDLHdDQUF5QztBQUN6Qyw4Q0FBK0M7QUFHL0Msc0RBQXVEO0FBQ3ZELDREQUEwRTtBQUMxRSw4Q0FBbUQ7QUFJbkQsTUFBTSxXQUFXLEdBQUc7SUFDbEIsWUFBWSxFQUFFLHFCQUFJLENBQUMsV0FBVztJQUM5QixZQUFZLEVBQUUscUJBQUksQ0FBQyxXQUFXO0lBQzlCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsWUFBWSxFQUFFLHFCQUFJLENBQUMsZUFBZTtJQUNsQyxVQUFVLEVBQUUsR0FBRztDQUNoQixDQUFDO0FBRUYsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFXdEMsWUFDRSxLQUFvQixFQUNwQixFQUFVLEVBQ1YsU0FBaUIsRUFDakIsTUFBcUI7UUFFckIsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsa0ZBQWtGO1FBQ2xGLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFUyxnQkFBZ0I7UUFDeEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JELFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN6QixhQUFhLEVBQUU7Z0JBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQzFCO1lBQ0QsMkJBQTJCLEVBQUUsV0FBVztTQUN6QyxDQUFDLENBQUM7UUFDSCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFUyxp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c0I7b0JBQ3RCLHdCQUF3QjtvQkFDeEIsaUJBQWlCO2lCQUNsQjthQUNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFUyx3QkFBd0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLHlCQUFlLENBQUM7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDaEIsT0FBTyxFQUFFO29CQUNQLGtDQUFrQztvQkFDbEMsZ0NBQWdDO29CQUNoQyw2QkFBNkI7b0JBQzdCLDBCQUEwQjtvQkFDMUIsb0JBQW9CO2lCQUNyQjthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQWpMRCw4QkFpTEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2RrID0gcmVxdWlyZSgnQGF3cy1jZGsvY29yZScpO1xuaW1wb3J0IGlhbSA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2F3cy1pYW0nKTtcbmltcG9ydCBsYW1iZGEgPSByZXF1aXJlKCdAYXdzLWNkay9hd3MtbGFtYmRhJyk7XG5pbXBvcnQgeyBOb2RlanNGdW5jdGlvbiB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEtbm9kZWpzJztcbmltcG9ydCBkeW5hbW9kYiA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2F3cy1keW5hbW9kYicpO1xuaW1wb3J0IGFwaWdhdGV3YXkgPSByZXF1aXJlKCdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheScpO1xuaW1wb3J0IHsgQXV0aG9yaXphdGlvblR5cGUsIENvcnMsIFBlcmlvZCB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1hcGlnYXRld2F5JztcbmltcG9ydCB7IFBvbGljeVN0YXRlbWVudCB9IGZyb20gJ0Bhd3MtY2RrL2F3cy1pYW0nO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBJTGF5ZXJWZXJzaW9uIH0gZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYS9saWIvbGF5ZXJzJztcblxuY29uc3QgY29yc09wdGlvbnMgPSB7XG4gIGFsbG93T3JpZ2luczogQ29ycy5BTExfT1JJR0lOUyxcbiAgYWxsb3dNZXRob2RzOiBDb3JzLkFMTF9NRVRIT0RTLFxuICBhbGxvd0NyZWRlbnRpYWxzOiB0cnVlLFxuICBhbGxvd0hlYWRlcnM6IENvcnMuREVGQVVMVF9IRUFERVJTLFxuICBzdGF0dXNDb2RlOiAyMDAsXG59O1xuXG5leHBvcnQgY2xhc3MgQmFzZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgcHJvdGVjdGVkIHppcEZpbGVMb2NhdGlvbjogc3RyaW5nO1xuICBwcm90ZWN0ZWQgY29uZmlnOiBDb25maWd1cmF0aW9uO1xuICBwcm90ZWN0ZWQgYXBpTmFtZTogc3RyaW5nO1xuICBwcm90ZWN0ZWQgc3RhZ2VOYW1lOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhcGk6IGFwaWdhdGV3YXkuUmVzdEFwaTtcbiAgcHJpdmF0ZSBzZWNyZXRzUG9saWN5OiBQb2xpY3lTdGF0ZW1lbnQ7XG4gIHByaXZhdGUgZHluYW1vQWNjZXNzOiBQb2xpY3lTdGF0ZW1lbnQ7XG4gIHByaXZhdGUgY29nbml0b0FjY2VzczogUG9saWN5U3RhdGVtZW50O1xuICBwcml2YXRlIHNxc0FjY2VzczogUG9saWN5U3RhdGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjb3BlOiBjZGsuQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgc3RhZ2VOYW1lOiBzdHJpbmcsXG4gICAgY29uZmlnOiBDb25maWd1cmF0aW9uLFxuICApIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHsgZW52OiBjb25maWcuZW52IH0pO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgLy8gdGhpcy56aXBGaWxlTG9jYXRpb24gPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4uLy4uLy4uL2Rpc3QvTGFtYmRhUGFja2FnZS56aXBcIik7XG4gICAgdGhpcy5hcGlOYW1lID0gJ3NhbXBsZS1hcGknO1xuICAgIHRoaXMuc3RhZ2VOYW1lID0gc3RhZ2VOYW1lO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUFwaUdhdGV3YXkoKSB7XG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCB0aGlzLmFwaU5hbWUsIHtcbiAgICAgIHJlc3RBcGlOYW1lOiB0aGlzLmFwaU5hbWUsXG4gICAgICBkZXBsb3lPcHRpb25zOiB7XG4gICAgICAgIHN0YWdlTmFtZTogdGhpcy5zdGFnZU5hbWUsXG4gICAgICB9LFxuICAgICAgZGVmYXVsdENvcnNQcmVmbGlnaHRPcHRpb25zOiBjb3JzT3B0aW9ucyxcbiAgICB9KTtcbiAgICByZXR1cm4gYXBpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUxhbWJkYUxheWVyKGlkOiBzdHJpbmcsIGZyb21Bc3NldFBhdGg6IHN0cmluZyxcbiAgKTogbGFtYmRhLkxheWVyVmVyc2lvbiB7XG4gICAgcmV0dXJuIG5ldyBsYW1iZGEuTGF5ZXJWZXJzaW9uKHRoaXMsIGlkLCB7XG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnJvbUFzc2V0UGF0aCksXG4gICAgICBjb21wYXRpYmxlUnVudGltZXM6IFtcbiAgICAgICAgbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzEyX1gsXG4gICAgICAgIGxhbWJkYS5SdW50aW1lLk5PREVKU18xMF9YLFxuICAgICAgXSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjcmVhdGVMYW1iZGEoXG4gICAgaWQ6IHN0cmluZyxcbiAgICBoYW5kbGVyOiBzdHJpbmcsXG4gICAgZnJvbUFzc2V0UGF0aDogc3RyaW5nLFxuICAgIGxheWVycz86IElMYXllclZlcnNpb25bXSxcbiAgKTogbGFtYmRhLkZ1bmN0aW9uIHtcbiAgICByZXR1cm4gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBpZCwge1xuICAgICAgaGFuZGxlcjogaGFuZGxlcixcbiAgICAgIGZ1bmN0aW9uTmFtZTogYCR7dGhpcy5hcGlOYW1lfS0ke2lkfWAsXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoZnJvbUFzc2V0UGF0aCksXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGxheWVyczogbGF5ZXJzLFxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNjApLFxuICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgIHN0YWdlTmFtZTogdGhpcy5jb25maWcuZGVwbG95ZWRFbnZpcm9ubWVudCxcbiAgICAgICAgTk9ERV9QQVRIOiAnJE5PREVfUEFUSDovb3B0JyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlUG9saWN5U3RhdGVtZW50Rm9yU2VjcmV0cygpIHtcbiAgICAvLyBzZWUgaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0lBTS9sYXRlc3QvVXNlckd1aWRlL2xpc3RfYXdzc2VjcmV0c21hbmFnZXIuaHRtbFxuICAgIGNvbnN0IHNlY3JldHNQb2xpY3kgPSBuZXcgaWFtLlBvbGljeVN0YXRlbWVudCh7XG4gICAgICBlZmZlY3Q6IGlhbS5FZmZlY3QuQUxMT1csXG4gICAgfSk7XG4gICAgc2VjcmV0c1BvbGljeS5hZGRBY3Rpb25zKCdzZWNyZXRzbWFuYWdlcjpHZXRTZWNyZXRWYWx1ZScpO1xuICAgIHNlY3JldHNQb2xpY3kuYWRkUmVzb3VyY2VzKCcqJyk7XG4gICAgcmV0dXJuIHNlY3JldHNQb2xpY3k7XG4gIH1cblxuICBwcm90ZWN0ZWQgaW50ZWdyYXRlKFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGFwaVJlc291cmNlOiBhcGlnYXRld2F5LklSZXNvdXJjZSxcbiAgICBsYW1iZGFGdW5jOiBsYW1iZGEuRnVuY3Rpb24sXG4gICkge1xuICAgIGNvbnN0IGludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24obGFtYmRhRnVuYyk7XG4gICAgYXBpUmVzb3VyY2UuYWRkTWV0aG9kKG1ldGhvZCwgaW50ZWdyYXRpb24sIHtcbiAgICAgIGF1dGhvcml6YXRpb25UeXBlOiBBdXRob3JpemF0aW9uVHlwZS5DT0dOSVRPLFxuICAgICAgLy8gYXV0aG9yaXplcjogeyBhdXRob3JpemVySWQ6IHRoaXMuYXV0aC5yZWYgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1bnNlY3VyZWRJbnRlZ3JhdGlvbihcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBhcGlSZXNvdXJjZTogYXBpZ2F0ZXdheS5JUmVzb3VyY2UsXG4gICAgbGFtYmRhRnVuYzogbGFtYmRhLkZ1bmN0aW9uLFxuICAgIGtleU5hbWU6IHN0cmluZyxcbiAgKSB7XG4gICAgY29uc3QgaW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihsYW1iZGFGdW5jKTtcbiAgICBjb25zdCByZXNvdXJjZU1ldGhvZCA9IGFwaVJlc291cmNlLmFkZE1ldGhvZChtZXRob2QsIGludGVncmF0aW9uLCB7XG4gICAgICBhdXRob3JpemF0aW9uVHlwZTogQXV0aG9yaXphdGlvblR5cGUuTk9ORSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJhdGVMaW1pdGluZ0tleSA9IHRoaXMuYXBpLmFkZEFwaUtleShgJHtrZXlOYW1lfS1rZXlgKTtcbiAgICByZXNvdXJjZU1ldGhvZC5yZXN0QXBpLmFkZFVzYWdlUGxhbihgJHtrZXlOYW1lfS11c2FnZS1wbGFuYCwge1xuICAgICAgbmFtZToga2V5TmFtZSxcbiAgICAgIGFwaUtleTogcmF0ZUxpbWl0aW5nS2V5LFxuICAgICAgcXVvdGE6IHsgbGltaXQ6IDEwMDAsIHBlcmlvZDogUGVyaW9kLk1PTlRIIH0sXG4gICAgICB0aHJvdHRsZTogeyByYXRlTGltaXQ6IDEsIGJ1cnN0TGltaXQ6IDEgfSwgLy8xIHJlcXVlc3QgcGVyIHNlY29uZCBsaW1pdCBvciByZXR1cm4gNDI5IFRvbyBNYW55IFJlcXVlc3RzXG4gICAgICBhcGlTdGFnZXM6IFt7IGFwaTogdGhpcy5hcGksIHN0YWdlOiB0aGlzLmFwaS5kZXBsb3ltZW50U3RhZ2UgfV0sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ3JhbnRTZWNyZXRzKGxhbWJkYTogbGFtYmRhLkZ1bmN0aW9uKSB7XG4gICAgbGFtYmRhLmFkZFRvUm9sZVBvbGljeSh0aGlzLnNlY3JldHNQb2xpY3kpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEYlBvbGljeVdpdGhBcm4odGFibGVBcm46IHN0cmluZykge1xuICAgIGlmICghdGhpcy5keW5hbW9BY2Nlc3MpIHtcbiAgICAgIHRoaXMuZHluYW1vQWNjZXNzID0gbmV3IFBvbGljeVN0YXRlbWVudCh7XG4gICAgICAgIHJlc291cmNlczogW3RhYmxlQXJuXSxcbiAgICAgICAgYWN0aW9uczogW1xuICAgICAgICAgICdkeW5hbW9kYjpCYXRjaEdldEl0ZW0nLFxuICAgICAgICAgICdkeW5hbW9kYjpCYXRjaFdyaXRlSXRlbScsXG4gICAgICAgICAgJ2R5bmFtb2RiOlB1dEl0ZW0nLFxuICAgICAgICAgICdkeW5hbW9kYjpEZWxldGVJdGVtJyxcbiAgICAgICAgICAnZHluYW1vZGI6R2V0U2hhcmRJdGVyYXRvcicsXG4gICAgICAgICAgJ2R5bmFtb2RiOkdldEl0ZW0nLFxuICAgICAgICAgICdkeW5hbW9kYjpTY2FuJyxcbiAgICAgICAgICAnZHluYW1vZGI6UXVlcnknLFxuICAgICAgICAgICdkeW5hbW9kYjpVcGRhdGVJdGVtJyxcbiAgICAgICAgICAnZHluYW1vZGI6RGVzY3JpYmVUYWJsZScsXG4gICAgICAgICAgJ2R5bmFtb2RiOkdldFJlY29yZHMnLFxuICAgICAgICBdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmR5bmFtb0FjY2VzcztcbiAgfVxuXG4gIHByb3RlY3RlZCBncmFudER5bmFtb0RiQWNjZXNzVG9MYW1iZGEoXG4gICAgdGFibGU6IGR5bmFtb2RiLlRhYmxlLFxuICAgIGxhbWJkYTogbGFtYmRhLkZ1bmN0aW9uLFxuICApIHtcbiAgICBsYW1iZGEuYWRkVG9Sb2xlUG9saWN5KHRoaXMuY3JlYXRlRGJQb2xpY3lXaXRoQXJuKHRhYmxlLnRhYmxlQXJuKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlUG9saWN5U3RhdGVtZW50Rm9yU3FzKCkge1xuICAgIC8vIHNlZSBodHRwczovL2RvY3MuYXdzLmFtYXpvbi5jb20vSUFNL2xhdGVzdC9Vc2VyR3VpZGUvbGlzdF9hbWF6b25zcXMuaHRtbFxuICAgIGlmICghdGhpcy5zcXNBY2Nlc3MpIHtcbiAgICAgIHRoaXMuc3FzQWNjZXNzID0gbmV3IGlhbS5Qb2xpY3lTdGF0ZW1lbnQoe1xuICAgICAgICBlZmZlY3Q6IGlhbS5FZmZlY3QuQUxMT1csXG4gICAgICAgIHJlc291cmNlczogW3RoaXMuY29uZmlnLm5vdGlmaWNhdGlvblNxc0Fybl0sXG4gICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICAnc3FzOlNlbmRNZXNzYWdlJyxcbiAgICAgICAgICAnc3FzOlNlbmRNZXNzYWdlQmF0Y2gnLFxuICAgICAgICAgICdzcXM6R2V0UXVldWVBdHRyaWJ1dGVzJyxcbiAgICAgICAgICAnc3FzOkdldFF1ZXVlVXJsJyxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zcXNBY2Nlc3M7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlQ29nbml0b0FkbWluUG9saWN5KCk6IFBvbGljeVN0YXRlbWVudCB7XG4gICAgaWYgKCF0aGlzLmNvZ25pdG9BY2Nlc3MpIHtcbiAgICAgIHRoaXMuY29nbml0b0FjY2VzcyA9IG5ldyBQb2xpY3lTdGF0ZW1lbnQoe1xuICAgICAgICByZXNvdXJjZXM6IFsnKiddLFxuICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgJ2NvZ25pdG8taWRwOkFkbWluU2V0VXNlclBhc3N3b3JkJyxcbiAgICAgICAgICAnY29nbml0by1pZHA6QWRtaW5Db25maXJtU2lnblVwJyxcbiAgICAgICAgICAnY29nbml0by1pZHA6QWRtaW5DcmVhdGVVc2VyJyxcbiAgICAgICAgICAnY29nbml0by1pZHA6QWRtaW5HZXRVc2VyJyxcbiAgICAgICAgICAnY29nbml0by1pZGVudGl0eToqJyxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvZ25pdG9BY2Nlc3M7XG4gIH1cbn1cbiJdfQ==