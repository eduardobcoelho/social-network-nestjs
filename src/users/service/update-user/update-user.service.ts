import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UserEntity } from 'src/users/entity/user.entity';
import { IUserRepository } from 'src/users/repository/user.repository';
import { IFindUserService } from '../find-user/find-user.service';

export interface IUpdateUserService {
  exec: (id: number, data: UpdateUserDto) => Promise<UserEntity>;
}

@Injectable()
export class UpdateUserService implements IUpdateUserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
    @Inject('IFindUserService')
    private readonly findUserService: IFindUserService,
  ) {}

  async exec(id: number, data: UpdateUserDto) {
    await this.findUserService.exec(id);
    const dtoValidKeys: Array<keyof UpdateUserDto> = [
      'name',
      'email',
      'gender',
      'birthDate',
    ];
    const dataSerialized = dtoValidKeys.reduce((acc, cur) => {
      if (data[cur]) {
        acc[cur] = data[cur];
      }
      return acc;
    }, {});
    return await this.userRepository.update(id, dataSerialized);
  }
}
