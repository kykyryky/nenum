import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ping';
  }

  getMatrix(): number[][] {
    return [
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4],
      [1,2,3,4]
    ]
  }

  order(): string {
    return 'Order recieved';
  }
}
