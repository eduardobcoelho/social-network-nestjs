import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { randomInt } from 'crypto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  async fetchAll(page: number, limit: number) {
    console.log(page, limit);
    return this.users;
  }

  async find(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = {
      id: randomInt(20),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(user: User, updateUserDto: UpdateUserDto) {
    return {
      ...user,
      ...updateUserDto,
    };
  }
}
