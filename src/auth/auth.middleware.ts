import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserModule } from './../user/user.module';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    if (!req.header('authorization')) throw new UnauthorizedException();
    const token = req.header('authorization').split(' ')[1];
    const payload = this.jwtService.verify(token);
    if (!payload.contactNo) throw new BadRequestException();

    next();
  }
}
