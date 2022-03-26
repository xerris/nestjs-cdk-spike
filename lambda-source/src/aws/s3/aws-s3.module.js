"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsS3Module = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
const aws_s3_service_1 = require("./aws-s3.service");
let AwsS3Module = class AwsS3Module {
};
AwsS3Module = __decorate([
    (0, common_1.Module)({
        imports: [config_1.AppConfigModule],
        providers: [aws_s3_service_1.AWSS3Service],
        exports: [aws_s3_service_1.AWSS3Service],
    })
], AwsS3Module);
exports.AwsS3Module = AwsS3Module;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXMzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1zMy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHlDQUErQztBQUMvQyxxREFBZ0Q7QUFPaEQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztDQUFHLENBQUE7QUFBZCxXQUFXO0lBTHZCLElBQUEsZUFBTSxFQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsd0JBQWUsQ0FBQztRQUMxQixTQUFTLEVBQUUsQ0FBQyw2QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLDZCQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLFdBQVcsQ0FBRztBQUFkLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IEFXU1MzU2VydmljZSB9IGZyb20gJy4vYXdzLXMzLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW0FwcENvbmZpZ01vZHVsZV0sXG4gIHByb3ZpZGVyczogW0FXU1MzU2VydmljZV0sXG4gIGV4cG9ydHM6IFtBV1NTM1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBBd3NTM01vZHVsZSB7fVxuIl19