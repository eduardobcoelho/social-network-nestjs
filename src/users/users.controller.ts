import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
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
import { DefaultGenderPipe } from './pipes/default-gender/default-gender.pipe';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async fetchAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return await this.usersService.fetchAll(page, limit);
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.find(id);
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ transform: true }), DefaultGenderPipe)
    input: CreateUserDto,
  ) {
    return await this.usersService.create(input);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: UpdateUserDto,
  ) {
    return await this.usersService.update(id, input);
  }
}
