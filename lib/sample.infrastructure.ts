#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');

import { SampleInfrastructureStack } from './sample-infrastructure-stack';
import { Configuration } from './configuration';
import * as process from 'process';

const configurations: { [key: string]: Configuration } = {
  ['dev']: {
    deployedEnvironment: 'dev',
    vpcId: 'vpc-1234567',
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    account: 'us-east-2:1234567',
    notificationSqsArn: 'to-be-defined',
  },
  ['staging']: {
    deployedEnvironment: 'staging',
    vpcId: 'vpc-2345678',
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    account: 'us-east-2:1234567',
    notificationSqsArn: 'to-be-defined',
  },

  ['prod']: {
    deployedEnvironment: 'prod',
    vpcId: 'vpc-3456789',
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    account: 'us-east-2:1234567',
    notificationSqsArn: 'to-be-defined',
  },
};

const app = new cdk.App();
const buildEnvironment = (app.node.tryGetContext('env') || 'dev')
  .trim()
  .toLowerCase();

new SampleInfrastructureStack(
  app,
  'SampleLambdaStack',
  configurations[buildEnvironment],
);
