"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsSqsModule = void 0;
const common_1 = require("@nestjs/common");
const aws_sqs_service_1 = require("./aws-sqs.service");
const sqs_message_builder_1 = require("./sqs.message.builder");
const config_1 = require("../../config");
const config_2 = require("../../config");
const aws_sdk_1 = require("aws-sdk");
let AwsSqsModule = class AwsSqsModule {
};
AwsSqsModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.AppConfigModule],
        providers: [
            aws_sqs_service_1.SqsService,
            sqs_message_builder_1.SqsMessageBuilder,
            config_2.AppConfig,
            {
                provide: 'AWS_SQS',
                useValue: new aws_sdk_1.SQS({ apiVersion: '2012-11-05' }),
            },
        ],
        exports: [aws_sqs_service_1.SqsService, sqs_message_builder_1.SqsMessageBuilder, 'AWS_SQS'],
    })
], AwsSqsModule);
exports.AwsSqsModule = AwsSqsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNxcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhd3Mtc3FzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyQ0FBd0M7QUFDeEMsdURBQStDO0FBQy9DLCtEQUEwRDtBQUMxRCx5Q0FBK0M7QUFDL0MseUNBQXlDO0FBQ3pDLHFDQUE4QjtBQWU5QixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0NBQUcsQ0FBQTtBQUFmLFlBQVk7SUFieEIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1FBQzFCLFNBQVMsRUFBRTtZQUNULDRCQUFVO1lBQ1YsdUNBQWlCO1lBQ2pCLGtCQUFTO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLFNBQVM7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJLGFBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsQ0FBQzthQUNoRDtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUMsNEJBQVUsRUFBRSx1Q0FBaUIsRUFBRSxTQUFTLENBQUM7S0FDcEQsQ0FBQztHQUNXLFlBQVksQ0FBRztBQUFmLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU3FzU2VydmljZSB9IGZyb20gJy4vYXdzLXNxcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNxc01lc3NhZ2VCdWlsZGVyIH0gZnJvbSAnLi9zcXMubWVzc2FnZS5idWlsZGVyJztcbmltcG9ydCB7IEFwcENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgU1FTIH0gZnJvbSAnYXdzLXNkayc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbQXBwQ29uZmlnTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3FzU2VydmljZSxcbiAgICBTcXNNZXNzYWdlQnVpbGRlcixcbiAgICBBcHBDb25maWcsXG4gICAge1xuICAgICAgcHJvdmlkZTogJ0FXU19TUVMnLFxuICAgICAgdXNlVmFsdWU6IG5ldyBTUVMoeyBhcGlWZXJzaW9uOiAnMjAxMi0xMS0wNScgfSksXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0czogW1Nxc1NlcnZpY2UsIFNxc01lc3NhZ2VCdWlsZGVyLCAnQVdTX1NRUyddLFxufSlcbmV4cG9ydCBjbGFzcyBBd3NTcXNNb2R1bGUge31cbiJdfQ==