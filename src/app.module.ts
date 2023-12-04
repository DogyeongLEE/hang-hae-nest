import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HealthController} from './health/health.controller'
import {TerminusModule} from '@nestjs/terminus'
import { CommonModule } from './common/common.module';
import {ConfigModule} from '@nestjs/config'
import {HealthModule} from './health/health.module'

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true, // 전체적으로 사용하기 위해
      envFilePath: `/config/env/.${process.env.NODE_ENV}.env`,
    }),
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
