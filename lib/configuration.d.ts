import { Environment } from '@aws-cdk/core';
export interface Configuration {
    readonly deployedEnvironment: string;
    readonly vpcId: string;
    readonly env?: Environment;
    readonly account: string;
    readonly notificationSqsArn: string;
}
