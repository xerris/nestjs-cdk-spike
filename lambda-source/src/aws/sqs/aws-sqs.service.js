"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SqsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsService = void 0;
const common_1 = require("@nestjs/common");
const sqs_message_builder_1 = require("./sqs.message.builder");
const AppConfig_1 = require("../../config/AppConfig");
let SqsService = SqsService_1 = class SqsService {
    constructor(messageBuilder, appConfig, awsSqs) {
        this.messageBuilder = messageBuilder;
        this.appConfig = appConfig;
        this.awsSqs = awsSqs;
        this.logger = new common_1.Logger(SqsService_1.name);
    }
    async send(payload) {
        try {
            const result = await this.awsSqs.sendMessage(payload).promise();
            this.logger.debug(`SQS message sent id: ${result.MessageId}`);
            return true;
        }
        catch (error) {
            this.logger.error(`Error sending SQS message: ${error}`);
            return false;
        }
    }
};
SqsService = SqsService_1 = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT }),
    __param(0, (0, common_1.Inject)(sqs_message_builder_1.SqsMessageBuilder)),
    __param(1, (0, common_1.Inject)(AppConfig_1.AppConfig)),
    __param(2, (0, common_1.Inject)('AWS_SQS'))
], SqsService);
exports.SqsService = SqsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNxcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXdzLXNxcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUU7QUFDbkUsK0RBQTBEO0FBQzFELHNEQUFtRDtBQUluRCxJQUFhLFVBQVUsa0JBQXZCLE1BQWEsVUFBVTtJQUdyQixZQUNxQyxjQUFpQyxFQUN6QyxTQUFvQixFQUNwQixNQUFXO1FBRkgsbUJBQWMsR0FBZCxjQUFjLENBQW1CO1FBQ3pDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUxoQyxXQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsWUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBTTFDLENBQUM7SUFFRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQStCO1FBQy9DLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHdCQUF3QixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUU5RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUV6RCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFyQlksVUFBVTtJQUR0QixJQUFBLG1CQUFVLEVBQUMsRUFBRSxLQUFLLEVBQUUsY0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBS2hDLFdBQUEsSUFBQSxlQUFNLEVBQUMsdUNBQWlCLENBQUMsQ0FBQTtJQUN6QixXQUFBLElBQUEsZUFBTSxFQUFDLHFCQUFTLENBQUMsQ0FBQTtJQUNqQixXQUFBLElBQUEsZUFBTSxFQUFDLFNBQVMsQ0FBQyxDQUFBO0dBTlQsVUFBVSxDQXFCdEI7QUFyQlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIExvZ2dlciwgU2NvcGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBTcXNNZXNzYWdlQnVpbGRlciB9IGZyb20gJy4vc3FzLm1lc3NhZ2UuYnVpbGRlcic7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvQXBwQ29uZmlnJztcbmltcG9ydCB7IFNRUyB9IGZyb20gJ2F3cy1zZGsnO1xuXG5ASW5qZWN0YWJsZSh7IHNjb3BlOiBTY29wZS5ERUZBVUxUIH0pXG5leHBvcnQgY2xhc3MgU3FzU2VydmljZSB7XG4gIHByaXZhdGUgbG9nZ2VyID0gbmV3IExvZ2dlcihTcXNTZXJ2aWNlLm5hbWUpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU3FzTWVzc2FnZUJ1aWxkZXIpIHByaXZhdGUgbWVzc2FnZUJ1aWxkZXI6IFNxc01lc3NhZ2VCdWlsZGVyLFxuICAgIEBJbmplY3QoQXBwQ29uZmlnKSBwcml2YXRlIGFwcENvbmZpZzogQXBwQ29uZmlnLFxuICAgIEBJbmplY3QoJ0FXU19TUVMnKSBwcml2YXRlIGF3c1NxczogU1FTLFxuICApIHt9XG5cbiAgcHVibGljIGFzeW5jIHNlbmQocGF5bG9hZDogU1FTLlNlbmRNZXNzYWdlUmVxdWVzdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmF3c1Nxcy5zZW5kTWVzc2FnZShwYXlsb2FkKS5wcm9taXNlKCk7XG4gICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhgU1FTIG1lc3NhZ2Ugc2VudCBpZDogJHtyZXN1bHQuTWVzc2FnZUlkfWApO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYEVycm9yIHNlbmRpbmcgU1FTIG1lc3NhZ2U6ICR7ZXJyb3J9YCk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==