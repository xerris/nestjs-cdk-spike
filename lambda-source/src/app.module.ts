import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { AppConfigModule } from './config/config.module';

@Module({
  imports: [HelloModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}