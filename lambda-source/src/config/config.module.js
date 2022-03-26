"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfigModule = void 0;
const common_1 = require("@nestjs/common");
const AppConfig_1 = require("./AppConfig");
let AppConfigModule = class AppConfigModule {
};
AppConfigModule = __decorate([
    (0, common_1.Module)({
        providers: [AppConfig_1.AppConfig],
        exports: [AppConfig_1.AppConfig],
    })
], AppConfigModule);
exports.AppConfigModule = AppConfigModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQXdDO0FBQ3hDLDJDQUF3QztBQU14QyxJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0NBQUcsQ0FBQTtBQUFsQixlQUFlO0lBSjNCLElBQUEsZUFBTSxFQUFDO1FBQ04sU0FBUyxFQUFFLENBQUMscUJBQVMsQ0FBQztRQUN0QixPQUFPLEVBQUUsQ0FBQyxxQkFBUyxDQUFDO0tBQ3JCLENBQUM7R0FDVyxlQUFlLENBQUc7QUFBbEIsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBcHBDb25maWcgfSBmcm9tICcuL0FwcENvbmZpZyc7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtBcHBDb25maWddLFxuICBleHBvcnRzOiBbQXBwQ29uZmlnXSxcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29uZmlnTW9kdWxlIHt9XG4iXX0=