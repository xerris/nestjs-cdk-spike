import { SqsMessageBuilder } from './sqs.message.builder';
import { AppConfig } from '../../config/AppConfig';
import { SQS } from 'aws-sdk';
export declare class SqsService {
    private messageBuilder;
    private appConfig;
    private awsSqs;
    private logger;
    constructor(messageBuilder: SqsMessageBuilder, appConfig: AppConfig, awsSqs: SQS);
    send(payload: SQS.SendMessageRequest): Promise<boolean>;
}
