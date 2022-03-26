"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
describe('AppController', () => {
    let appController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService],
        }).compile();
        appController = app.get(app_controller_1.AppController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbnRyb2xsZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb250cm9sbGVyLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBc0Q7QUFDdEQscURBQWlEO0FBQ2pELCtDQUEyQztBQUUzQyxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUM3QixJQUFJLGFBQTRCLENBQUM7SUFFakMsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0sR0FBRyxHQUFrQixNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN4RCxXQUFXLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzVCLFNBQVMsRUFBRSxDQUFDLHdCQUFVLENBQUM7U0FDeEIsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsYUFBYSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQWdCLDhCQUFhLENBQUMsQ0FBQztJQUN4RCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUU7WUFDdEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0LCBUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJztcbmltcG9ydCB7IEFwcENvbnRyb2xsZXIgfSBmcm9tICcuL2FwcC5jb250cm9sbGVyJztcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuL2FwcC5zZXJ2aWNlJztcblxuZGVzY3JpYmUoJ0FwcENvbnRyb2xsZXInLCAoKSA9PiB7XG4gIGxldCBhcHBDb250cm9sbGVyOiBBcHBDb250cm9sbGVyO1xuXG4gIGJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFwcDogVGVzdGluZ01vZHVsZSA9IGF3YWl0IFRlc3QuY3JlYXRlVGVzdGluZ01vZHVsZSh7XG4gICAgICBjb250cm9sbGVyczogW0FwcENvbnRyb2xsZXJdLFxuICAgICAgcHJvdmlkZXJzOiBbQXBwU2VydmljZV0sXG4gICAgfSkuY29tcGlsZSgpO1xuXG4gICAgYXBwQ29udHJvbGxlciA9IGFwcC5nZXQ8QXBwQ29udHJvbGxlcj4oQXBwQ29udHJvbGxlcik7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdyb290JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcmV0dXJuIFwiSGVsbG8gV29ybGQhXCInLCAoKSA9PiB7XG4gICAgICBleHBlY3QoYXBwQ29udHJvbGxlci5nZXRIZWxsbygpKS50b0JlKCdIZWxsbyBXb3JsZCEnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiJdfQ==