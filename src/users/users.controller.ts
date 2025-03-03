import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DefaultGenderPipe } from './pipe/default-gender/default-gender.pipe';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  fetchAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.usersService.fetchAll(page, limit);
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.find(id);

    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Post()
  create(
    @Body(new ValidationPipe({ transform: true }), DefaultGenderPipe)
    input: CreateUserDto,
  ) {
    return this.usersService.create(input);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: UpdateUserDto,
  ) {
    const user = await this.find(id);
    return this.usersService.update(user, input);
  }
}
