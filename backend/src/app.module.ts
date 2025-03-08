import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [HttpModule, AuthModule, PassportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
