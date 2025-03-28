import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export interface ICreateUserService {
  exec: (data: CreateUserDto) => Promise<void>;
}

@Injectable()
export class CreateUserService implements ICreateUserService {
  constructor() {}

  exec(data: CreateUserDto) {
    console.log(data);
    return Promise.resolve();
  }
}
