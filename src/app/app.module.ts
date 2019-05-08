import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BullModule } from 'nest-bull';
import { NumberService } from './number.service';

@Module({
  imports: [
    BullModule.forRoot({
      options: {
        redis: {
          host: 'redis',
          port: 6379,
        },
      },
      processors: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, NumberService],
})
export class AppModule {}
