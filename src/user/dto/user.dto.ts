import { IsPhoneNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @IsPhoneNumber('IN')
  contactNo: number;
}
