import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entity/user/user.entity';
import { UserUnicKeys } from 'src/users/enum';

export interface IFindUserService {
  exec: (value: string | number, key?: UserUnicKeys) => Promise<UserEntity>;
}

@Injectable()
export class FindUserService implements IFindUserService {
  constructor() {}

  exec(value: string | number, key = UserUnicKeys.ID) {
    console.log(value, key);
    return Promise.resolve({} as UserEntity);
  }
}
