import { Injectable } from '@nestjs/common';
import { User, UserUnicKeys } from 'src/users/entity/user.entity';

export interface IFindUserService {
  exec: (value: string | number, key?: UserUnicKeys) => Promise<User>;
}

@Injectable()
export class FindUserService implements IFindUserService {
  constructor() {}

  exec(value: string | number, key = UserUnicKeys.ID) {
    console.log(value, key);
    return Promise.resolve({} as User);
  }
}
