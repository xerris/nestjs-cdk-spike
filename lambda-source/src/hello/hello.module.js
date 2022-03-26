"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloModule = void 0;
const common_1 = require("@nestjs/common");
const hello_controller_1 = require("./hello.controller");
const hello_service_1 = require("./hello.service");
let HelloModule = class HelloModule {
};
HelloModule = __decorate([
    (0, common_1.Module)({
        controllers: [hello_controller_1.HelloController],
        providers: [hello_service_1.HelloService],
    })
], HelloModule);
exports.HelloModule = HelloModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVsbG8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4Qyx5REFBcUQ7QUFDckQsbURBQStDO0FBTS9DLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRyxDQUFBO0FBQWQsV0FBVztJQUp2QixJQUFBLGVBQU0sRUFBQztRQUNOLFdBQVcsRUFBRSxDQUFDLGtDQUFlLENBQUM7UUFDOUIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csV0FBVyxDQUFHO0FBQWQsa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBIZWxsb0NvbnRyb2xsZXIgfSBmcm9tICcuL2hlbGxvLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgSGVsbG9TZXJ2aWNlIH0gZnJvbSAnLi9oZWxsby5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGNvbnRyb2xsZXJzOiBbSGVsbG9Db250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbSGVsbG9TZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgSGVsbG9Nb2R1bGUge31cbiJdfQ==