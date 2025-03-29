import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { DefaultGenderPipe } from './pipes/default-gender/default-gender.pipe';
import { UsersController } from './controller/users.controller';
import { CreateUserService } from './service/create-user/create-user.service';
import { FindUserService } from './service/find-user/find-user.service';
import { UpdateUserService } from './service/update-user/update-user.service';
import { DeleteUserService } from './service/delete-user/delete-user.service';
import { UserRepository } from './repository/user.repository';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from './entity/user.provider';

const repositoryProvider = [
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

@Module({
  imports: [CommonModule, DatabaseModule],
  controllers: [UsersController],
  providers: [
    DefaultGenderPipe,
    ...repositoryProvider,
    ...serviceProviders,
    userProvider,
  ],
})
export class UsersModule {}
