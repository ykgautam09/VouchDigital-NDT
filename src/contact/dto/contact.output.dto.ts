import {
  IsNumber,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ContactOutputDto {
  @IsNumber()
  @MinLength(6)
  @MaxLength(20)
  id: number;

  @IsString()
  @MinLength(1)
  name: string;

  @IsPhoneNumber('IN')
  @MinLength(10)
  @MaxLength(13)
  contactNo?: number;
}
