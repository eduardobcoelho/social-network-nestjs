import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { PostEntity } from 'src/posts/entity/post.entity';
import { IPostRepository } from 'src/posts/repository/post.repository';

export interface ICreatePostService {
  exec: (data: CreatePostDto) => Promise<PostEntity>;
}

@Injectable()
export class CreatePostService implements ICreatePostService {
  constructor(
    @Inject('IPostRepository') private readonly postRepository: IPostRepository,
  ) {}

  async exec(data: CreatePostDto) {
    return await this.postRepository.create(data);
  }
}
