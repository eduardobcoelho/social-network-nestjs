import {
  Body,
  Controller,
  Delete,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { ICreatePostService } from '../service/create-post/create-post.service';
import { IDeletePostService } from '../service/delete-post/delete-post.service';
import { UpdatePostDto } from '../dto/update-post.dto';
import { IUpdatePostService } from '../service/update-post/update-post.service';

@Controller('posts')
export class PostsController {
  constructor(
    @Inject('ICreatePostService')
    private readonly createPostService: ICreatePostService,

    @Inject('IUpdatePostService')
    private readonly updatePostService: IUpdatePostService,

    @Inject('IDeletePostService')
    private readonly deletePostService: IDeletePostService,
  ) {}

  @Post()
  async create(@Body(ValidationPipe) input: CreatePostDto) {
    return await this.createPostService.exec(input);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) input: UpdatePostDto,
  ) {
    return await this.updatePostService.exec(id, input);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deletePostService.exec(id);
  }
}
