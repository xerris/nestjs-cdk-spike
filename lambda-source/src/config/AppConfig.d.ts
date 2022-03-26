export declare class AppConfig {
    private logger;
    private awsConfig;
    private initialized;
    private awsS3ApiVersion;
    constructor();
    getRegion(): string;
    getApiVersion(): any;
    getTableNamePrefix(): string;
    initialize(): void;
    get(configKey: string): any;
}
