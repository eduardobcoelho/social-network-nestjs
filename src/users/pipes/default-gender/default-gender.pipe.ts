import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserGender } from 'src/users/enum';

@Injectable()
export class DefaultGenderPipe implements PipeTransform {
  transform(value: CreateUserDto) {
    return {
      ...value,
      gender: value.gender ?? UserGender.OTHER,
    };
  }
}
