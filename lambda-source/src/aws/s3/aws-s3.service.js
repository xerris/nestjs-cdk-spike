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
exports.AWSS3Service = void 0;
const common_1 = require("@nestjs/common");
const AWS = require("aws-sdk");
const config_1 = require("../../config");
const fs = require("fs");
const stream = require("stream");
const path = require("path");
let AWSS3Service = class AWSS3Service {
    constructor(appConfig) {
        this.appConfig = appConfig;
        this.s3Client = new AWS.S3({ apiVersion: this.appConfig.getApiVersion() });
    }
    async getObject(bucketName, objectKey) {
        const params = {
            Bucket: bucketName,
            Key: objectKey,
        };
        const response = await this.s3Client.getObject(params).promise();
        return response.Body;
    }
    async uploadFileInS3Bucket(filePath, bucketName) {
        const fileName = path.basename(filePath);
        const uploadStream = (S3, Bucket, Key) => {
            const passThroughStream = new stream.PassThrough();
            return {
                writeStream: passThroughStream,
                promise: S3.upload({ Bucket, Key, Body: passThroughStream }).promise(),
            };
        };
        const { writeStream, promise } = uploadStream(this.s3Client, bucketName, fileName);
        fs.createReadStream(filePath).pipe(writeStream);
        let output = true;
        await promise.catch((reason) => {
            output = false;
            throw new common_1.InternalServerErrorException(reason);
        });
        if (output) {
            console.log('file uploaded successfully');
        }
        return output;
    }
};
AWSS3Service = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.AppConfig))
], AWSS3Service);
exports.AWSS3Service = AWSS3Service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXMzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhd3MtczMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FJd0I7QUFDeEIsK0JBQStCO0FBQy9CLHlDQUF5QztBQUN6Qyx5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUc3QixJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBR3ZCLFlBQXVDLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTLENBQ3BCLFVBQWtCLEVBQ2xCLFNBQWlCO1FBRWpCLE1BQU0sTUFBTSxHQUFHO1lBQ2IsTUFBTSxFQUFFLFVBQVU7WUFDbEIsR0FBRyxFQUFFLFNBQVM7U0FDZixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRSxPQUFPLFFBQVEsQ0FBQyxJQUFjLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxRQUFnQixFQUFFLFVBQWtCO1FBQ3BFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFekMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFVLEVBQUUsTUFBYyxFQUFFLEdBQVcsRUFBRSxFQUFFO1lBQy9ELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsT0FBTztnQkFDTCxXQUFXLEVBQUUsaUJBQWlCO2dCQUM5QixPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7YUFDdkUsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEdBQUcsWUFBWSxDQUMzQyxJQUFJLENBQUMsUUFBUSxFQUNiLFVBQVUsRUFDVixRQUFRLENBQ1QsQ0FBQztRQUNGLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLE1BQU0sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzdCLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDZixNQUFNLElBQUkscUNBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUMzQztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBO0FBL0NZLFlBQVk7SUFEeEIsSUFBQSxtQkFBVSxHQUFFO0lBSUUsV0FBQSxJQUFBLGVBQU0sRUFBQyxrQkFBUyxDQUFDLENBQUE7R0FIbkIsWUFBWSxDQStDeEI7QUEvQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEludGVybmFsU2VydmVyRXJyb3JFeGNlcHRpb24sXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcbmltcG9ydCB7IEFwcENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBzdHJlYW0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBV1NTM1NlcnZpY2Uge1xuICBwcml2YXRlIHMzQ2xpZW50OiBBV1MuUzM7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChBcHBDb25maWcpIHByaXZhdGUgYXBwQ29uZmlnOiBBcHBDb25maWcpIHtcbiAgICB0aGlzLnMzQ2xpZW50ID0gbmV3IEFXUy5TMyh7IGFwaVZlcnNpb246IHRoaXMuYXBwQ29uZmlnLmdldEFwaVZlcnNpb24oKSB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRPYmplY3QoXG4gICAgYnVja2V0TmFtZTogc3RyaW5nLFxuICAgIG9iamVjdEtleTogc3RyaW5nLFxuICApOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIEJ1Y2tldDogYnVja2V0TmFtZSxcbiAgICAgIEtleTogb2JqZWN0S2V5LFxuICAgIH07XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuczNDbGllbnQuZ2V0T2JqZWN0KHBhcmFtcykucHJvbWlzZSgpO1xuICAgIHJldHVybiByZXNwb25zZS5Cb2R5IGFzIEJ1ZmZlcjtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cGxvYWRGaWxlSW5TM0J1Y2tldChmaWxlUGF0aDogc3RyaW5nLCBidWNrZXROYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpO1xuXG4gICAgY29uc3QgdXBsb2FkU3RyZWFtID0gKFMzOiBBV1MuUzMsIEJ1Y2tldDogc3RyaW5nLCBLZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcGFzc1Rocm91Z2hTdHJlYW0gPSBuZXcgc3RyZWFtLlBhc3NUaHJvdWdoKCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZVN0cmVhbTogcGFzc1Rocm91Z2hTdHJlYW0sXG4gICAgICAgIHByb21pc2U6IFMzLnVwbG9hZCh7IEJ1Y2tldCwgS2V5LCBCb2R5OiBwYXNzVGhyb3VnaFN0cmVhbSB9KS5wcm9taXNlKCksXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCB7IHdyaXRlU3RyZWFtLCBwcm9taXNlIH0gPSB1cGxvYWRTdHJlYW0oXG4gICAgICB0aGlzLnMzQ2xpZW50LFxuICAgICAgYnVja2V0TmFtZSxcbiAgICAgIGZpbGVOYW1lLFxuICAgICk7XG4gICAgZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlUGF0aCkucGlwZSh3cml0ZVN0cmVhbSk7XG4gICAgbGV0IG91dHB1dCA9IHRydWU7XG4gICAgYXdhaXQgcHJvbWlzZS5jYXRjaCgocmVhc29uKSA9PiB7XG4gICAgICBvdXRwdXQgPSBmYWxzZTtcbiAgICAgIHRocm93IG5ldyBJbnRlcm5hbFNlcnZlckVycm9yRXhjZXB0aW9uKHJlYXNvbik7XG4gICAgfSk7XG4gICAgaWYgKG91dHB1dCkge1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cbn1cbiJdfQ==