import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/users/entity/user.entity';
import { UserUnicKeys } from 'src/users/enum';
import { IUserRepository } from 'src/users/repository/user.repository';

export interface IFindUserService {
  exec: (value: string | number, key?: UserUnicKeys) => Promise<UserEntity>;
}

@Injectable()
export class FindUserService implements IFindUserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async exec(value: string | number, key = UserUnicKeys.ID) {
    const user = await this.userRepository.find(value, key);
    if (!user) throw new NotFoundException('Usuário não encontrado');

    return user;
  }
}
