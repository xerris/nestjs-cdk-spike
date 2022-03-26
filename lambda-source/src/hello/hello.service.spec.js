"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const hello_service_1 = require("./hello.service");
describe('HelloService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [hello_service_1.HelloService],
        }).compile();
        service = module.get(hello_service_1.HelloService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG8uc2VydmljZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVsbG8uc2VydmljZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXNEO0FBQ3RELG1EQUErQztBQUUvQyxRQUFRLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFJLE9BQXFCLENBQUM7SUFFMUIsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0sTUFBTSxHQUFrQixNQUFNLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUMzRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUViLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFlLDRCQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7UUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXN0LCBUZXN0aW5nTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy90ZXN0aW5nJztcbmltcG9ydCB7IEhlbGxvU2VydmljZSB9IGZyb20gJy4vaGVsbG8uc2VydmljZSc7XG5cbmRlc2NyaWJlKCdIZWxsb1NlcnZpY2UnLCAoKSA9PiB7XG4gIGxldCBzZXJ2aWNlOiBIZWxsb1NlcnZpY2U7XG5cbiAgYmVmb3JlRWFjaChhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbW9kdWxlOiBUZXN0aW5nTW9kdWxlID0gYXdhaXQgVGVzdC5jcmVhdGVUZXN0aW5nTW9kdWxlKHtcbiAgICAgIHByb3ZpZGVyczogW0hlbGxvU2VydmljZV0sXG4gICAgfSkuY29tcGlsZSgpO1xuXG4gICAgc2VydmljZSA9IG1vZHVsZS5nZXQ8SGVsbG9TZXJ2aWNlPihIZWxsb1NlcnZpY2UpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGJlIGRlZmluZWQnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHNlcnZpY2UpLnRvQmVEZWZpbmVkKCk7XG4gIH0pO1xufSk7XG4iXX0=