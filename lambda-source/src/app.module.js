"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const hello_module_1 = require("./hello/hello.module");
const config_module_1 = require("./config/config.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [hello_module_1.HelloModule, config_module_1.AppConfigModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLHFEQUFpRDtBQUNqRCwrQ0FBMkM7QUFDM0MsdURBQW1EO0FBQ25ELDBEQUF5RDtBQU96RCxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0NBQUcsQ0FBQTtBQUFaLFNBQVM7SUFMckIsSUFBQSxlQUFNLEVBQUM7UUFDTixPQUFPLEVBQUUsQ0FBQywwQkFBVyxFQUFFLCtCQUFlLENBQUM7UUFDdkMsV0FBVyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQyx3QkFBVSxDQUFDO0tBQ3hCLENBQUM7R0FDVyxTQUFTLENBQUc7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL2FwcC5jb250cm9sbGVyJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbGxvTW9kdWxlIH0gZnJvbSAnLi9oZWxsby9oZWxsby5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbSGVsbG9Nb2R1bGUsIEFwcENvbmZpZ01vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbQXBwQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW0FwcFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==