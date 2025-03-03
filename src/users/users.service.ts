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

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = {
      id: randomInt(1000000),
      createdAt: new Date(),
      ...createUserDto,
    };
    this.users.push(newUser);

    return newUser;
  }

  async update(user: User, updateUserDto: UpdateUserDto): Promise<User> {
    const userUpdated = {
      ...user,
      ...updateUserDto,
      updatedAt: new Date(),
      id: user.id,
    };
    Object.assign(user, userUpdated);

    return userUpdated;
  }
}
