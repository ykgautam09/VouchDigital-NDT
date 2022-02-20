import { IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class ContactInputDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsPhoneNumber('IN')
  contactNo: number;
}
