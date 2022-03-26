import { HelloService } from './hello.service';
import { Hello } from '../domain';
export declare class HelloController {
    private helloService;
    constructor(helloService: HelloService);
    hello(message: string): Promise<Hello>;
}
