import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CommonModule } from 'src/common/common.module';
import { DefaultGenderPipe } from './pipes/default-gender/default-gender.pipe';

@Module({
  imports: [CommonModule],
  controllers: [UsersController],
  providers: [UsersService, DefaultGenderPipe],
  exports: [UsersService],
})
export class UsersModule {}
