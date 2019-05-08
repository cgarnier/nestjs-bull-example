import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService {
  thrice(value: number): number {
    return value * 3;
  }
  twice(value: number): number {
    return value * 2;
  }
}
