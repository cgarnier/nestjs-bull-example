import { Module, OnModuleInit } from '@nestjs/common';
import { AppService } from '../app/app.service';
import { BullModule, InjectQueue } from 'nest-bull';
import { DoneCallback, Job, Queue } from 'bull';
import { NumberService } from '../app/number.service';
import { MyQueue } from './my.queue';

@Module({
  imports: [
    BullModule.forRoot({
      options: {
        redis: {
          port: 6379,
        },
      },
      processors: [
        (job: Job, done: DoneCallback) => { done(null, job.data); },
      ],
    }),
  ],
  providers: [AppService, NumberService, MyQueue],
})
export class WorkerModule {
}
