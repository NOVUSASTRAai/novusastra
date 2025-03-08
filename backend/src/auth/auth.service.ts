import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(username: string): Promise<string> {
    const payload = { username };
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string): Promise<any> {
    // This is a simple validation; replace with database logic later
    if (username === 'admin' && password === 'password123') {
      return { userId: 1, username };
    }
    return null;
  }
}
