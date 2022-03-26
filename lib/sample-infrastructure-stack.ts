import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { BaseStack } from './base-stack';
import { Configuration } from './configuration';
import lambda = require('@aws-cdk/aws-lambda');
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';

export class SampleInfrastructureStack extends BaseStack {
  constructor(scope: cdk.Construct, id: string, config: Configuration) {
    super(scope, id, 'sample-lambda-stack', config);

    let nodeModules = 'lambda-source/node_modules';
    let singlePath = 'lambda-source/src/singleLambda';

    const nodeModuleLayer = this.createLambdaLayer("node_modules", nodeModules);

    this.createLambda('test-lambda', 'index.handler', singlePath,
      [nodeModuleLayer]);

    // this.createLambdaLayer(
    //   'BackendLayer',
    //   path.join(__dirname, `/../../node_modules`),
    // );

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
}
