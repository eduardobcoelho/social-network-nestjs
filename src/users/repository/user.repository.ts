import { CreateUserDto } from '../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserUnicKeys } from '../enum';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface IUserRepository {
  find: (
    value: string | number,
    key?: UserUnicKeys,
  ) => Promise<UserEntity | null>;
  create: (data: CreateUserDto) => Promise<UserEntity>;
  update: (id: number, data: UpdateUserDto) => Promise<UserEntity>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async find(value: string | number, key = UserUnicKeys.ID) {
    return await this.userRepository.findOneBy({
      [key]: value,
    });
  }

  async create(data: CreateUserDto) {
    const user = this.userRepository.create(data);
    return await this.userRepository.save(user);
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.find(id);
    return await this.userRepository.save({ ...user, ...data });
  }
}
