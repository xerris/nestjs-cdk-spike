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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbService = void 0;
const common_1 = require("@nestjs/common");
const dynamo_easy_1 = require("@shiftcoders/dynamo-easy");
const config_1 = require("../../config");
const DynamoDB = require("aws-sdk/clients/dynamodb");
let DynamoDbService = class DynamoDbService {
    constructor(config) {
        this.config = config;
        (0, dynamo_easy_1.updateDynamoEasyConfig)({
            tableNameResolver: (tableName) => {
                return `${this.config.getTableNamePrefix()}${tableName}`;
            },
        });
    }
    createStore(model) {
        return new dynamo_easy_1.DynamoStore(model, new DynamoDB({ region: this.config.getRegion() }));
    }
};
DynamoDbService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.AppConfig))
], DynamoDbService);
exports.DynamoDbService = DynamoDbService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1vZGIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImR5bmFtb2RiLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9EO0FBQ3BELDBEQUlrQztBQUNsQyx5Q0FBeUM7QUFDekMscURBQXFEO0FBR3JELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFFVSxNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBRXpCLElBQUEsb0NBQXNCLEVBQUM7WUFDckIsaUJBQWlCLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUU7Z0JBQ3ZDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUM7WUFDM0QsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxXQUFXLENBQUksS0FBMEI7UUFDOUMsT0FBTyxJQUFJLHlCQUFXLENBQ3BCLEtBQUssRUFDTCxJQUFJLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FDbEQsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBbEJZLGVBQWU7SUFEM0IsSUFBQSxtQkFBVSxHQUFFO0lBR1IsV0FBQSxJQUFBLGVBQU0sRUFBQyxrQkFBUyxDQUFDLENBQUE7R0FGVCxlQUFlLENBa0IzQjtBQWxCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gIHVwZGF0ZUR5bmFtb0Vhc3lDb25maWcsXG4gIER5bmFtb1N0b3JlLFxuICBNb2RlbENvbnN0cnVjdG9yLFxufSBmcm9tICdAc2hpZnRjb2RlcnMvZHluYW1vLWVhc3knO1xuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCAqIGFzIER5bmFtb0RCIGZyb20gJ2F3cy1zZGsvY2xpZW50cy9keW5hbW9kYic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEeW5hbW9EYlNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEFwcENvbmZpZylcbiAgICBwcml2YXRlIGNvbmZpZzogQXBwQ29uZmlnLFxuICApIHtcbiAgICB1cGRhdGVEeW5hbW9FYXN5Q29uZmlnKHtcbiAgICAgIHRhYmxlTmFtZVJlc29sdmVyOiAodGFibGVOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuY29uZmlnLmdldFRhYmxlTmFtZVByZWZpeCgpfSR7dGFibGVOYW1lfWA7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZVN0b3JlPFQ+KG1vZGVsOiBNb2RlbENvbnN0cnVjdG9yPFQ+KTogRHluYW1vU3RvcmU8VD4ge1xuICAgIHJldHVybiBuZXcgRHluYW1vU3RvcmU8VD4oXG4gICAgICBtb2RlbCxcbiAgICAgIG5ldyBEeW5hbW9EQih7IHJlZ2lvbjogdGhpcy5jb25maWcuZ2V0UmVnaW9uKCkgfSksXG4gICAgKTtcbiAgfVxufVxuIl19