import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { BaseStack } from './base-stack';
import { Configuration } from './configuration';
import lambda = require('@aws-cdk/aws-lambda');
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { zip } from 'zip-a-folder';
import {ILayerVersion} from "@aws-cdk/aws-lambda/lib/layers";

export class SampleInfrastructureStack extends BaseStack {
  constructor(scope: cdk.Construct, id: string, config: Configuration) {
    super(scope, id, 'sample-lambda-stack', config);

    const nodeModuleLayer = this.deployNodeModulesLayer();
    this.deploySimpleLambda([nodeModuleLayer]);

    // this.createNodeLambda(
    //   'sample-lambda',
    //   'main',
    //   path.join(__dirname, `/../../src/index.ts`),
    // );
    //
    // const myFunction = new NodejsFunction(this, 'my-function', {
    //   memorySize: 1024,
    //   timeout: cdk.Duration.seconds(5),
    //   runtime: lambda.Runtime.NODEJS_14_X,
    //   handler: 'main',
    //   entry: path.join(__dirname, `/../../src/index.ts`),
    // });
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
