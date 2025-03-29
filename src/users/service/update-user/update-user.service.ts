import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UserEntity } from 'src/users/entity/user/user.entity';

export interface IUpdateUserService {
  exec: (id: number, data: UpdateUserDto) => Promise<UserEntity>;
}

@Injectable()
export class UpdateUserService implements IUpdateUserService {
  constructor() {}

  exec(id: number, data: UpdateUserDto) {
    console.log(id, data);
    return Promise.resolve({} as UserEntity);
  }
}
