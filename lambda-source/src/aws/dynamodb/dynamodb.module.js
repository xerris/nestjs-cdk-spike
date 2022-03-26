"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const dynamodb_service_1 = require("./dynamodb.service");
let DynamoDbModule = class DynamoDbModule {
};
DynamoDbModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.AppConfigModule],
        providers: [dynamodb_service_1.DynamoDbService],
        exports: [dynamodb_service_1.DynamoDbService],
    })
], DynamoDbModule);
exports.DynamoDbModule = DynamoDbModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1vZGIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHluYW1vZGIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4Qyx5Q0FBK0M7QUFDL0MseURBQXFEO0FBT3JELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7Q0FBRyxDQUFBO0FBQWpCLGNBQWM7SUFMMUIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO1FBQzFCLFNBQVMsRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDNUIsT0FBTyxFQUFFLENBQUMsa0NBQWUsQ0FBQztLQUMzQixDQUFDO0dBQ1csY0FBYyxDQUFHO0FBQWpCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IER5bmFtb0RiU2VydmljZSB9IGZyb20gJy4vZHluYW1vZGIuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbQXBwQ29uZmlnTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbRHluYW1vRGJTZXJ2aWNlXSxcbiAgZXhwb3J0czogW0R5bmFtb0RiU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtb0RiTW9kdWxlIHt9XG4iXX0=