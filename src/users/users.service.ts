import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User, UserUnicKeys } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { randomInt } from 'crypto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findByKeyValue<T = number>(value: T, key: UserUnicKeys) {
    return this.users.find((user) => user[key] === value);
  }

  async fetchAll(page: number, limit: number) {
    console.log(page, limit);
    return this.users;
  }

  async find<T = number>(value: T, key: UserUnicKeys = UserUnicKeys.ID) {
    const user = this.findByKeyValue<T>(value, key);
    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const [userByEmail, userByDocument] = [
      this.findByKeyValue(createUserDto.email, UserUnicKeys.EMAIL),
      this.findByKeyValue(createUserDto.document, UserUnicKeys.DOCUMENT),
    ];
    if (userByEmail) throw new BadRequestException('E-mail inválido');
    if (userByDocument) throw new BadRequestException('Documento inválido');

    const newUser = {
      id: randomInt(1000000),
      createdAt: new Date(),
      ...createUserDto,
    };
    this.users.push(newUser);

    return newUser;
  }

  async update(userId: number, updateUserDto: UpdateUserDto): Promise<User> {
    const userByEmail = this.findByKeyValue(
      updateUserDto.email,
      UserUnicKeys.EMAIL,
    );
    if (userByEmail) throw new BadRequestException('E-mail inválido');

    const user = await this.find(userId);

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
