import * as cdk from '@aws-cdk/core';
import {ILayerVersion} from "@aws-cdk/aws-lambda/lib/layers";
import lambda = require('@aws-cdk/aws-lambda');
import * as gateway from "@aws-cdk/aws-apigateway";
import { Configuration } from './configuration';
import * as path from 'path';
import { BaseStack } from './base-stack';
import { zip } from 'zip-a-folder';

export class SampleInfrastructureStack extends BaseStack {
  constructor(scope: cdk.Construct, id: string, config: Configuration) {
    super(scope, id, 'sample-lambda-stack', config);

    const nodeModuleLayer = this.deployNodeModulesLayer();

    let testLambda = this.deploySimpleLambda([nodeModuleLayer]);
    new gateway.LambdaRestApi(this, "TestEndpoint", { handler: testLambda });

    let backendApi = this.createLambda("nest-api", 'lambda.handler', 'lambda-source/dist',[nodeModuleLayer]);
    new gateway.LambdaRestApi(this, "BackendEndApi", { handler: backendApi });

  }

  deployNodeModulesLayer(): ILayerVersion {
    let nodeModules = 'lambda-source/node_modules';
    let zippedNodeModules = path.join(__dirname, '../../dist/nodeModules.zip');

    let squishy =  new SquishMe(nodeModules, zippedNodeModules);
    squishy.go();

    return this.createLambdaLayer("node_modules", nodeModules);
  }

  deploySimpleLambda(layers?: ILayerVersion[]): lambda.IFunction {
    let singlePath = 'lambda-source/src/singleLambda';
    return this.createLambda('test-lambda', 'index.handler', singlePath, layers);
  }

}

class SquishMe {
  sourcePath: string;
  targetPath: string;

  constructor(sourcePath: string, targetPath: string) {
    this.sourcePath = sourcePath;
    this.targetPath = targetPath;
  }

  async go() {
    await zip(this.sourcePath, this.targetPath);
  }
}
