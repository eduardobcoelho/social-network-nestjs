import {
  Body,
  Controller,
  // DefaultValuePipe,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  // Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { DefaultGenderPipe } from '../pipes/default-gender/default-gender.pipe';
import { ICreateUserService } from '../service/create-user/create-user.service';
import { IUpdateUserService } from '../service/update-user/update-user.service';
import { IFindUserService } from '../service/find-user/find-user.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('ICreateUserService')
    private readonly createUserService: ICreateUserService,

    @Inject('IUpdateUserService')
    private readonly updateUserService: IUpdateUserService,

    @Inject('IFindUserService')
    private readonly findUserService: IFindUserService,
  ) {}

  // @Get()
  // async fetchAll(
  //   @Query('page', ParseIntPipe) page: number,
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  // ) {
  //   return await this.usersService.fetchAll(page, limit);
  // }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return await this.findUserService.exec(id);
  }

  @Post()
  @HttpCode(201)
  async create(
    @Body(new ValidationPipe({ transform: true }), DefaultGenderPipe)
    input: CreateUserDto,
  ) {
    return await this.createUserService.exec(input);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: UpdateUserDto,
  ) {
    return await this.updateUserService.exec(id, input);
  }
}
