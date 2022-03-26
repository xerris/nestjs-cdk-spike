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
exports.HelloController = void 0;
const common_1 = require("@nestjs/common");
let HelloController = class HelloController {
    constructor(helloService) {
        this.helloService = helloService;
    }
    async hello(message) {
        console.log(`hello: ${message}`);
        return await this.helloService.hello(message);
    }
};
__decorate([
    (0, common_1.Get)('/:message'),
    __param(0, (0, common_1.Param)('message'))
], HelloController.prototype, "hello", null);
HelloController = __decorate([
    (0, common_1.Controller)('hello')
], HelloController);
exports.HelloController = HelloController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXdEO0FBS3hELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBR2xELEtBQUssQ0FBQyxLQUFLLENBQW1CLE9BQWU7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDakMsT0FBTyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRixDQUFBO0FBSkM7SUFEQyxJQUFBLFlBQUcsRUFBQyxXQUFXLENBQUM7SUFDSixXQUFBLElBQUEsY0FBSyxFQUFDLFNBQVMsQ0FBQyxDQUFBOzRDQUc1QjtBQVBVLGVBQWU7SUFEM0IsSUFBQSxtQkFBVSxFQUFDLE9BQU8sQ0FBQztHQUNQLGVBQWUsQ0FRM0I7QUFSWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIsIEdldCwgUGFyYW0gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBIZWxsb1NlcnZpY2UgfSBmcm9tICcuL2hlbGxvLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGVsbG8gfSBmcm9tICcuLi9kb21haW4nO1xuXG5AQ29udHJvbGxlcignaGVsbG8nKVxuZXhwb3J0IGNsYXNzIEhlbGxvQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVsbG9TZXJ2aWNlOiBIZWxsb1NlcnZpY2UpIHt9XG5cbiAgQEdldCgnLzptZXNzYWdlJylcbiAgYXN5bmMgaGVsbG8oQFBhcmFtKCdtZXNzYWdlJykgbWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxIZWxsbz4ge1xuICAgIGNvbnNvbGUubG9nKGBoZWxsbzogJHttZXNzYWdlfWApO1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmhlbGxvU2VydmljZS5oZWxsbyhtZXNzYWdlKTtcbiAgfVxufVxuIl19