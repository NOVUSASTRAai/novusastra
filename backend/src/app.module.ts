import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    PassportModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: '../novusastra.db',
      synchronize: true,
      entities: ['dist/entities/*.js'], // Updated to point to compiled JS files
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
