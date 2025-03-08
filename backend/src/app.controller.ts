import { Controller, Get, UseGuards } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly httpService: HttpService) {}

  @Get('secure')
  @UseGuards(AuthGuard('jwt'))
  async getSecureData(): Promise<string> {
    const response = await firstValueFrom(this.httpService.get('http://localhost:8000/encrypt/hello'));
    return response.data.encrypted;
  }
}
