import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { NotFoundException } from '@nestjs/common/exceptions';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('user')
    private readonly contactModel: Model<User>,
  ) {}

  async register(data: UserDto): Promise<{ message: string }> {
    const user = await this.contactModel.create(data);
    if (!user)
      throw new BadRequestException(data, 'could not register new user');
    await user.save();
    return { message: 'registration Successfully' };
  }

  async login(data: UserDto): Promise<{ message: string; token?: string }> {
    const { contactNo, password } = data;
    try {
      const user = await this.contactModel.findOne({
        $and: [{ contactNo }, { password }],
      });
      if (!user)
        throw new NotFoundException(data, 'Credentials does not matched');
      const token = this.jwtService.sign({ contactNo });
      return { message: 'login successful', token };
    } catch (e) {
      throw new BadRequestException(
        { Error: 'Credentials does not matched', data },
        'Credentials does not matched',
      );
    }
  }
}
