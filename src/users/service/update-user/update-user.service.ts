import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { User } from 'src/users/entity/user.entity';

export interface IUpdateUserService {
  exec: (id: number, updateUserDto: UpdateUserDto) => Promise<User>;
}

@Injectable()
export class UpdateUserService implements IUpdateUserService {
  constructor() {}

  exec(id: number, updateUserDto: UpdateUserDto) {
    console.log(id, updateUserDto);
    return Promise.resolve({} as User);
  }
}
