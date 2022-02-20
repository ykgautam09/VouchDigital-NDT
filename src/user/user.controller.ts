import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('api/auth')
export class UserController {
  constructor(private readonly authService: UserService) {}
  @Post('register')
  async register(@Body() data: UserDto) {
    return await this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: UserDto) {
    return await this.authService.login(data);
  }
}
