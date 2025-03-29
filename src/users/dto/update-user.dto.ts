import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserGender } from '../enum';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsEnum(UserGender)
  @IsOptional()
  gender?: UserGender;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  birthDate?: Date;
}
