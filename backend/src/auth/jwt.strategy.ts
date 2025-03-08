import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'GHLy2!JG^q6du*y#@jFnBmDNz5vjTsvrv3PT9n^mpSCP5f1$8w7cGhPxuG34LNEphH0YNP8zxFe2NawgU92*UhkQWc',
    });
  }

  async validate(payload: any) {
    return { username: payload.username };
  }
}
