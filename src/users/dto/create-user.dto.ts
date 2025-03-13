import { Transform, Type } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { UserGender } from '../entity/user.entity';
import { IsDocument } from '../validators';
import { TransformToOnlyNumbers } from 'src/common/transforms';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsDocument()
  @Transform(TransformToOnlyNumbers())
  document: string;

  @IsEnum(UserGender)
  @IsOptional()
  @Transform(({ value }) => (value ?? UserGender.OTHER) as UserGender)
  gender: UserGender;

  @IsDate()
  @Type(() => Date)
  birthDate: Date;
}
