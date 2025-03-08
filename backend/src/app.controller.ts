import { Controller, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @Get('secure')
  async getSecureData(): Promise<string> {
    const response = await firstValueFrom(this.httpService.get('http://localhost:8000/encrypt/hello'));
    return response.data.encrypted;
  }
}
