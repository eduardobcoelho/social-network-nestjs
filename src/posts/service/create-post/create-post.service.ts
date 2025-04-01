import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';
import { PostEntity } from 'src/posts/entity/post.entity';
import { IPostRepository } from 'src/posts/repository/post.repository';
import { FindUserService } from 'src/users/service/find-user/find-user.service';

export interface ICreatePostService {
  exec: (data: CreatePostDto) => Promise<PostEntity>;
}

@Injectable()
export class CreatePostService implements ICreatePostService {
  constructor(
    @Inject('IPostRepository') private readonly postRepository: IPostRepository,

    @Inject('IFindUserService')
    private readonly findUserService: FindUserService,
  ) {}

  async exec(data: CreatePostDto) {
    await this.findUserService.exec(data.userId);
    return await this.postRepository.create(data);
  }
}
