import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DefaultGenderPipe } from './pipes/default-gender/default-gender.pipe';
import { UsersController } from './controller/users.controller';
import { CreateUserService } from './service/create-user/create-user.service';
import { FindUserService } from './service/find-user/find-user.service';
import { UpdateUserService } from './service/update-user/update-user.service';
import { DeleteUserService } from './service/delete-user/delete-user.service';
import { UserRepository } from './repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';

const pipes = [DefaultGenderPipe];

const repositoryProviders = [
  {
    provide: 'IUserRepository',
    useClass: UserRepository,
  },
];

const serviceProviders = [
  {
    provide: 'ICreateUserService',
    useClass: CreateUserService,
  },
  {
    provide: 'IFindUserService',
    useClass: FindUserService,
  },
  {
    provide: 'IUpdateUserService',
    useClass: UpdateUserService,
  },
  {
    provide: 'IDeleteUserService',
    useClass: DeleteUserService,
  },
];

const exportsServices = [
  {
    provide: 'IFindUserService',
    useClass: CreateUserService,
  },
];

@Module({
  imports: [CommonModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [...pipes, ...repositoryProviders, ...serviceProviders],
  exports: [...exportsServices],
})
export class UsersModule {}
