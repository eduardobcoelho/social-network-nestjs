import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export interface ICreateUserService {
  exec: (createUserDto: CreateUserDto) => Promise<void>;
}

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor() {}

  exec(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return Promise.resolve();
  }
}
