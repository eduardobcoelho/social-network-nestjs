import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UsersService } from 'src/users/users.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
  ) {}

  @Get()
  async fetchAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return await this.postsService.fetchAll(page, limit);
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    const post = await this.postsService.find(id);
    if (!post) throw new NotFoundException('Post not found');

    return post;
  }

  @Post()
  async create(@Body(ValidationPipe) input: CreatePostDto) {
    const user = await this.usersService.find(input.userId);
    if (!user) throw new NotFoundException('User not found');

    return await this.postsService.create(input);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: UpdatePostDto,
  ) {
    const post = await this.find(id);

    return await this.postsService.update(post, input);
  }

  @Delete()
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.postsService.delete(id);
  }
}
