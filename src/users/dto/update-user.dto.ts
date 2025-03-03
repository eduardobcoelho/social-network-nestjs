import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsString } from 'class-validator';
import { UserGender } from '../entity/user.entity';

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsEnum(UserGender)
  gender: UserGender;

  @IsDate()
  @Type(() => Date)
  birthDate: Date;
}
