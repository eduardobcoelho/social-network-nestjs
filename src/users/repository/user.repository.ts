import { UpdatePostDto } from 'src/posts/dto/update-post.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User, UserUnicKeys } from '../entity/user.entity';
import { Injectable } from '@nestjs/common';

export interface IUserRepository {
  find: (value: string | number, key?: UserUnicKeys) => Promise<User>;
  create: (data: CreateUserDto) => Promise<void>;
  update: (data: UpdatePostDto) => Promise<User>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  find() {
    return Promise.resolve({} as User);
  }

  create() {
    return Promise.resolve();
  }

  update() {
    return Promise.resolve({} as User);
  }
}
