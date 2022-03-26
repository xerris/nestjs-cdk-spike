"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleInfrastructureStack = void 0;
const path = require("path");
const base_stack_1 = require("./base-stack");
class SampleInfrastructureStack extends base_stack_1.BaseStack {
    constructor(scope, id, config) {
        super(scope, id, 'sample-lambda-stack', config);
        let nodeModules = path.join(__dirname, `../../node_modules`);
        let singlePath = path.join(__dirname, `../../src/singleLambda`);
        const nodeModuleLayer = this.createLambdaLayer("node_modules", nodeModules);
        this.createLambda('test-lambda', 'index.handler', singlePath, [nodeModuleLayer]);
        // this.createLambdaLayer(
        //   'BackendLayer',
        //   path.join(__dirname, `/../../node_modules`),
        // );
        // this.createNodeLambda(
        //   'sample-lambda',
        //   'main',
        //   path.join(__dirname, `/../../src/index.ts`),
        // );
        //
        // const myFunction = new NodejsFunction(this, 'my-function', {
        //   memorySize: 1024,
        //   timeout: cdk.Duration.seconds(5),
        //   runtime: lambda.Runtime.NODEJS_14_X,
        //   handler: 'main',
        //   entry: path.join(__dirname, `/../../src/index.ts`),
        // });
    }
}
exports.SampleInfrastructureStack = SampleInfrastructureStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLWluZnJhc3RydWN0dXJlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2FtcGxlLWluZnJhc3RydWN0dXJlLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZCQUE2QjtBQUM3Qiw2Q0FBeUM7QUFLekMsTUFBYSx5QkFBMEIsU0FBUSxzQkFBUztJQUN0RCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLE1BQXFCO1FBQ2pFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLHFCQUFxQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWhELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFDN0QsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUVoRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTVFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQzFELENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUVyQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGlEQUFpRDtRQUNqRCxLQUFLO1FBRUwseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osaURBQWlEO1FBQ2pELEtBQUs7UUFDTCxFQUFFO1FBQ0YsK0RBQStEO1FBQy9ELHNCQUFzQjtRQUN0QixzQ0FBc0M7UUFDdEMseUNBQXlDO1FBQ3pDLHFCQUFxQjtRQUNyQix3REFBd0Q7UUFDeEQsTUFBTTtJQUNSLENBQUM7Q0FDRjtBQS9CRCw4REErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgQmFzZVN0YWNrIH0gZnJvbSAnLi9iYXNlLXN0YWNrJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24nO1xuaW1wb3J0IGxhbWJkYSA9IHJlcXVpcmUoJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnKTtcbmltcG9ydCB7IE5vZGVqc0Z1bmN0aW9uIH0gZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYS1ub2RlanMnO1xuXG5leHBvcnQgY2xhc3MgU2FtcGxlSW5mcmFzdHJ1Y3R1cmVTdGFjayBleHRlbmRzIEJhc2VTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBjb25maWc6IENvbmZpZ3VyYXRpb24pIHtcbiAgICBzdXBlcihzY29wZSwgaWQsICdzYW1wbGUtbGFtYmRhLXN0YWNrJywgY29uZmlnKTtcblxuICAgIGxldCBub2RlTW9kdWxlcyA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGAuLi8uLi9ub2RlX21vZHVsZXNgKTtcbiAgICBsZXQgc2luZ2xlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGAuLi8uLi9zcmMvc2luZ2xlTGFtYmRhYCk7XG5cbiAgICBjb25zdCBub2RlTW9kdWxlTGF5ZXIgPSB0aGlzLmNyZWF0ZUxhbWJkYUxheWVyKFwibm9kZV9tb2R1bGVzXCIsIG5vZGVNb2R1bGVzKTtcblxuICAgIHRoaXMuY3JlYXRlTGFtYmRhKCd0ZXN0LWxhbWJkYScsICdpbmRleC5oYW5kbGVyJywgc2luZ2xlUGF0aCxcbiAgICAgIFtub2RlTW9kdWxlTGF5ZXJdKTtcblxuICAgIC8vIHRoaXMuY3JlYXRlTGFtYmRhTGF5ZXIoXG4gICAgLy8gICAnQmFja2VuZExheWVyJyxcbiAgICAvLyAgIHBhdGguam9pbihfX2Rpcm5hbWUsIGAvLi4vLi4vbm9kZV9tb2R1bGVzYCksXG4gICAgLy8gKTtcblxuICAgIC8vIHRoaXMuY3JlYXRlTm9kZUxhbWJkYShcbiAgICAvLyAgICdzYW1wbGUtbGFtYmRhJyxcbiAgICAvLyAgICdtYWluJyxcbiAgICAvLyAgIHBhdGguam9pbihfX2Rpcm5hbWUsIGAvLi4vLi4vc3JjL2luZGV4LnRzYCksXG4gICAgLy8gKTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IG15RnVuY3Rpb24gPSBuZXcgTm9kZWpzRnVuY3Rpb24odGhpcywgJ215LWZ1bmN0aW9uJywge1xuICAgIC8vICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICAvLyAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDUpLFxuICAgIC8vICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgLy8gICBoYW5kbGVyOiAnbWFpbicsXG4gICAgLy8gICBlbnRyeTogcGF0aC5qb2luKF9fZGlybmFtZSwgYC8uLi8uLi9zcmMvaW5kZXgudHNgKSxcbiAgICAvLyB9KTtcbiAgfVxufVxuIl19