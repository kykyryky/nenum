import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

interface PersonDto {
  date: string
}

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('matrix')
  matrix(@Body() person: PersonDto): any {
    return this.appService.getMatrix(person.date);
  }

  @Post('order')
  order(): string {
    return this.appService.getHello();
  }
}
