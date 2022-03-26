import * as cdk from '@aws-cdk/core';
import { BaseStack } from './base-stack';
import { Configuration } from './configuration';
export declare class SampleInfrastructureStack extends BaseStack {
    constructor(scope: cdk.Construct, id: string, config: Configuration);
}
