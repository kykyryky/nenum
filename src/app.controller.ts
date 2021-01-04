import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('matrix')
  matrix(): number[][] {
    return this.appService.getMatrix();
  }

  @Post('order')
  order(): string {
    return this.appService.getHello();
  }
}
