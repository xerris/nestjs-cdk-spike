"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqsMessageBuilder = void 0;
const common_1 = require("@nestjs/common");
let SqsMessageBuilder = class SqsMessageBuilder {
    constructor() {
        this.build = (payload, sqsEndpoint) => ({
            DelaySeconds: 10,
            MessageBody: JSON.stringify(payload),
            QueueUrl: sqsEndpoint,
        });
    }
};
SqsMessageBuilder = __decorate([
    (0, common_1.Injectable)()
], SqsMessageBuilder);
exports.SqsMessageBuilder = SqsMessageBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3FzLm1lc3NhZ2UuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNxcy5tZXNzYWdlLmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBRzVDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQTlCO1FBQ1MsVUFBSyxHQUFHLENBQUksT0FBVSxFQUFFLFdBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEQsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3BDLFFBQVEsRUFBRSxXQUFXO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FBQSxDQUFBO0FBTlksaUJBQWlCO0lBRDdCLElBQUEsbUJBQVUsR0FBRTtHQUNBLGlCQUFpQixDQU03QjtBQU5ZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcXNNZXNzYWdlQnVpbGRlciB7XG4gIHB1YmxpYyBidWlsZCA9IDxUPihwYXlsb2FkOiBULCBzcXNFbmRwb2ludDogc3RyaW5nKSA9PiAoe1xuICAgIERlbGF5U2Vjb25kczogMTAsXG4gICAgTWVzc2FnZUJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIFF1ZXVlVXJsOiBzcXNFbmRwb2ludCxcbiAgfSk7XG59XG4iXX0=