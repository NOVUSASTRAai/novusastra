import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(username: string, password: string): Promise<User> {
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }

  async login(username: string, password: string): Promise<{ access_token: string }> {
    try {
      const user = await this.userRepository.findOne({ where: { username } });
      if (!user || user.password !== password) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { username: user.username };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new UnauthorizedException(error.message || 'Login failed');
    }
  }
}
