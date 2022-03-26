"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
async function handler(event) {
    console.log('event 👉', event);
    return {
        body: JSON.stringify({ message: 'Successful lambda invocation' }),
        statusCode: 200,
    };
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxLQUFLLFVBQVUsT0FBTyxDQUMzQixLQUE2QjtJQUU3QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUvQixPQUFPO1FBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsQ0FBQztRQUNqRSxVQUFVLEVBQUUsR0FBRztLQUNoQixDQUFDO0FBQ0osQ0FBQztBQVRELDBCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5RXZlbnRWMiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0VjIgfSBmcm9tICdhd3MtbGFtYmRhJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIGV2ZW50OiBBUElHYXRld2F5UHJveHlFdmVudFYyLFxuKTogUHJvbWlzZTxBUElHYXRld2F5UHJveHlSZXN1bHRWMj4ge1xuICBjb25zb2xlLmxvZygnZXZlbnQg8J+RiScsIGV2ZW50KTtcblxuICByZXR1cm4ge1xuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ1N1Y2Nlc3NmdWwgbGFtYmRhIGludm9jYXRpb24nIH0pLFxuICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgfTtcbn1cbiJdfQ==