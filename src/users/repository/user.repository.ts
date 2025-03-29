import { UpdatePostDto } from 'src/posts/dto/update-post.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserUnicKeys } from '../enum';
import { UserEntity } from '../entity/user/user.entity';

export interface IUserRepository {
  find: (value: string | number, key?: UserUnicKeys) => Promise<UserEntity>;
  create: (data: CreateUserDto) => Promise<void>;
  update: (data: UpdatePostDto) => Promise<UserEntity>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
  ) {}

  find() {
    return Promise.resolve({} as UserEntity);
  }

  create() {
    return Promise.resolve();
  }

  update() {
    return Promise.resolve({} as UserEntity);
  }
}
