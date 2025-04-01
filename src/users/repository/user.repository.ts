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
  delete: (id: number) => Promise<void>;
}

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async find(value: string | number, key = UserUnicKeys.ID) {
    return await this.repository.findOneBy({
      [key]: value,
    });
  }

  async create(data: CreateUserDto) {
    const user = this.repository.create(data);
    return await this.repository.save(user);
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.find(id);
    return await this.repository.save({ ...user, ...data });
  }

  async delete(id: number) {
    await this.repository.softDelete(id);
  }
}
