import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PostEntity } from 'src/posts/entity/post.entity';
import { IPostRepository } from 'src/posts/repository/post.repository';

export interface IFindPostService {
  exec: (id: number) => Promise<PostEntity>;
}

@Injectable()
export class FindPostService implements IFindPostService {
  constructor(
    @Inject('IPostRepository') private readonly postRepository: IPostRepository,
  ) {}

  async exec(id: number) {
    const post = await this.postRepository.find(id);
    if (!post) throw new NotFoundException('Post não encontrado');

    return post;
  }
}
