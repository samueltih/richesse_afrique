import { Product } from '@richesse-afrique/data';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const product: Product = {
      name: 'Collier en pyrite',
      description: 'Collier faite en pierre de pyrite blanche.',
    };
    console.log('Product: ', product);
    return this.appService.getHello();
  }
}
