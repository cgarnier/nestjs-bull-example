import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { InjectQueue } from 'nest-bull';
import { Job, Queue } from 'bull';

@Controller('jobs')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectQueue() readonly queue: Queue,
  ) {}

  @Post()
  async addJob( @Body('value') value: number ) {
    const job: Job = await this.queue.add('thrice', value);
    await this.queue.add('thrice', value);
    await this.queue.add('thrice', value);
    await this.queue.add('thrice', value);
    await this.queue.add('thrice', value);
    await this.queue.add('thrice', value);
    return job.id;
  }

  @Get(':id')
  async getJob( @Param('id') id: string ) {
    return await this.queue.getJob(id);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
