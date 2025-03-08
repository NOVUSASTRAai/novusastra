import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios'; // Add this import

@Module({
  imports: [HttpModule], // Add HttpModule here
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
