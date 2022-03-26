"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AppConfig_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const config = require("config");
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
let AppConfig = AppConfig_1 = class AppConfig {
    constructor() {
        this.logger = new common_1.Logger(AppConfig_1.name);
        this.awsConfig = config.get('aws');
    }
    getRegion() {
        return this.awsConfig.region;
    }
    getApiVersion() {
        return this.awsConfig.awsS3ApiVersion;
    }
    getTableNamePrefix() {
        return this.awsConfig.tableNamePrefix;
    }
    initialize() {
        if (this.initialized)
            return;
        this.initialized = true;
        this.logger.debug('initializing application configuration');
        const region = config.get('aws')['region'];
        AWS.config.update({ region: region });
        this.logger.debug(`using AWS region: ${region}`);
    }
    get(configKey) {
        return config.get(configKey);
    }
};
AppConfig = AppConfig_1 = __decorate([
    (0, common_1.Injectable)()
], AppConfig);
exports.AppConfig = AppConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsMkNBQWtFO0FBQ2xFLCtCQUErQjtBQUcvQixJQUFhLFNBQVMsaUJBQXRCLE1BQWEsU0FBUztJQU1wQjtRQUxRLFdBQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxXQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFNMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxTQUFTO1FBQ2QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRU0sYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxrQkFBa0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7UUFDNUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxHQUFHLENBQUMsU0FBaUI7UUFDMUIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDRixDQUFBO0FBbENZLFNBQVM7SUFEckIsSUFBQSxtQkFBVSxHQUFFO0dBQ0EsU0FBUyxDQWtDckI7QUFsQ1ksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnY29uZmlnJztcbmltcG9ydCB7IEluamVjdGFibGUsIExvZ2dlciwgT25Nb2R1bGVJbml0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnIHtcbiAgcHJpdmF0ZSBsb2dnZXIgPSBuZXcgTG9nZ2VyKEFwcENvbmZpZy5uYW1lKTtcbiAgcHJpdmF0ZSBhd3NDb25maWc7XG4gIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgYXdzUzNBcGlWZXJzaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hd3NDb25maWcgPSBjb25maWcuZ2V0KCdhd3MnKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRSZWdpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hd3NDb25maWcucmVnaW9uO1xuICB9XG5cbiAgcHVibGljIGdldEFwaVZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYXdzQ29uZmlnLmF3c1MzQXBpVmVyc2lvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRUYWJsZU5hbWVQcmVmaXgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5hd3NDb25maWcudGFibGVOYW1lUHJlZml4O1xuICB9XG5cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCdpbml0aWFsaXppbmcgYXBwbGljYXRpb24gY29uZmlndXJhdGlvbicpO1xuICAgIGNvbnN0IHJlZ2lvbiA9IGNvbmZpZy5nZXQoJ2F3cycpWydyZWdpb24nXTtcbiAgICBBV1MuY29uZmlnLnVwZGF0ZSh7IHJlZ2lvbjogcmVnaW9uIH0pO1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKGB1c2luZyBBV1MgcmVnaW9uOiAke3JlZ2lvbn1gKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQoY29uZmlnS2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gY29uZmlnLmdldChjb25maWdLZXkpO1xuICB9XG59XG4iXX0=