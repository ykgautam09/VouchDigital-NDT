import { IsNumber, IsPhoneNumber, IsString, MinLength } from 'class-validator';

export class filterContactDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsPhoneNumber('IN')
  contactNo: number;

  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
