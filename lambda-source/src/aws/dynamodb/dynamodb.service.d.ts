import { DynamoStore, ModelConstructor } from '@shiftcoders/dynamo-easy';
import { AppConfig } from '../../config';
export declare class DynamoDbService {
    private config;
    constructor(config: AppConfig);
    createStore<T>(model: ModelConstructor<T>): DynamoStore<T>;
}
