"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloService = void 0;
const common_1 = require("@nestjs/common");
const domain_1 = require("../domain");
let HelloService = class HelloService {
    async hello(message) {
        return new domain_1.Hello(message);
    }
};
HelloService = __decorate([
    (0, common_1.Injectable)()
], HelloService);
exports.HelloService = HelloService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlbGxvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBQzVDLHNDQUFrQztBQUdsQyxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBQ3ZCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBZTtRQUN6QixPQUFPLElBQUksY0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRixDQUFBO0FBSlksWUFBWTtJQUR4QixJQUFBLG1CQUFVLEdBQUU7R0FDQSxZQUFZLENBSXhCO0FBSlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgSGVsbG8gfSBmcm9tICcuLi9kb21haW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGVsbG9TZXJ2aWNlIHtcbiAgYXN5bmMgaGVsbG8obWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxIZWxsbz4ge1xuICAgIHJldHVybiBuZXcgSGVsbG8obWVzc2FnZSk7XG4gIH1cbn1cbiJdfQ==