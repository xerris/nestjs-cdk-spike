/// <reference types="node" />
import { AppConfig } from '../../config';
export declare class AWSS3Service {
    private appConfig;
    private s3Client;
    constructor(appConfig: AppConfig);
    getObject(bucketName: string, objectKey: string): Promise<Buffer>;
    uploadFileInS3Bucket(filePath: string, bucketName: string): Promise<boolean>;
}
