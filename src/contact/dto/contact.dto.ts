import { IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class ContactDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsPhoneNumber('IN')
  contactNo: number;
}
