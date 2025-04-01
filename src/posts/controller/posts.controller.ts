import {
  Body,
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { ICreatePostService } from '../service/create-post/create-post.service';
import { IDeletePostService } from '../service/delete-post/delete-post.service';

@Controller('posts')
export class PostsController {
  constructor(
    @Inject('ICreatePostService')
    private readonly createPostService: ICreatePostService,

    @Inject('IDeletePostService')
    private readonly deletePostService: IDeletePostService,
  ) {}

  @Post()
  async create(@Body(ValidationPipe) input: CreatePostDto) {
    return await this.createPostService.exec(input);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deletePostService.exec(id);
  }
}
