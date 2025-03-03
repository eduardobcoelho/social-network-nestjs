import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DefaultGenderPipe } from './pipe/default-gender/default-gender.pipe';

@Module({
  controllers: [UsersController],
  providers: [UsersService, DefaultGenderPipe],
  exports: [UsersService],
})
export class UsersModule {}
