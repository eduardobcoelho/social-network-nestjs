import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/users/repository/user.repository';

export interface IDeleteUserService {
  exec: (id: number) => Promise<void>;
}

@Injectable()
export class DeleteUserService implements IDeleteUserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async exec(id: number) {
    await this.userRepository.delete(id);
  }
}
