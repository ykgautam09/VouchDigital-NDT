import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  private readonly jwtService: JwtService;
  canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    if (!request.header('authorization')) throw new UnauthorizedException();
    const token = request.header('authorization').split(' ')[1];
    const payload = this.jwtService.verify(token);
    if (!payload.contactNo) throw new BadRequestException();
    return;
  }
}
