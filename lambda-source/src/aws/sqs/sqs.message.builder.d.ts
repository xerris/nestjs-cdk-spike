export declare class SqsMessageBuilder {
    build: <T>(payload: T, sqsEndpoint: string) => {
        DelaySeconds: number;
        MessageBody: string;
        QueueUrl: string;
    };
}
