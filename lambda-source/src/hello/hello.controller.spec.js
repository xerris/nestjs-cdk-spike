"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const hello_controller_1 = require("./hello.controller");
describe('HelloController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [hello_controller_1.HelloController],
        }).compile();
        controller = module.get(hello_controller_1.HelloController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uY29udHJvbGxlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVsbG8uY29udHJvbGxlci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNEO0FBQ3RELHlEQUFxRDtBQUVyRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO0lBQy9CLElBQUksVUFBMkIsQ0FBQztJQUVoQyxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDcEIsTUFBTSxNQUFNLEdBQWtCLE1BQU0sY0FBSSxDQUFDLG1CQUFtQixDQUFDO1lBQzNELFdBQVcsRUFBRSxDQUFDLGtDQUFlLENBQUM7U0FDL0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQWtCLGtDQUFlLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDM0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0LCBUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJztcbmltcG9ydCB7IEhlbGxvQ29udHJvbGxlciB9IGZyb20gJy4vaGVsbG8uY29udHJvbGxlcic7XG5cbmRlc2NyaWJlKCdIZWxsb0NvbnRyb2xsZXInLCAoKSA9PiB7XG4gIGxldCBjb250cm9sbGVyOiBIZWxsb0NvbnRyb2xsZXI7XG5cbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlOiBUZXN0aW5nTW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIGNvbnRyb2xsZXJzOiBbSGVsbG9Db250cm9sbGVyXSxcbiAgICB9KS5jb21waWxlKCk7XG5cbiAgICBjb250cm9sbGVyID0gbW9kdWxlLmdldDxIZWxsb0NvbnRyb2xsZXI+KEhlbGxvQ29udHJvbGxlcik7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgYmUgZGVmaW5lZCcsICgpID0+IHtcbiAgICBleHBlY3QoY29udHJvbGxlcikudG9CZURlZmluZWQoKTtcbiAgfSk7XG59KTtcbiJdfQ==