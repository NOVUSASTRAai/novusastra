import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { AuthService } from '../auth/auth.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authService = app.get(AuthService);
  await authService.createUser('admin', 'password123');
  console.log('User seeded successfully');
  await app.close();
}
bootstrap();
