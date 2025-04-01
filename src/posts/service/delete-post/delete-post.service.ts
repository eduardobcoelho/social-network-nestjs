import { Inject, Injectable } from '@nestjs/common';
import { IPostRepository } from 'src/posts/repository/post.repository';

export interface IDeletePostService {
  exec: (id: number) => Promise<void>;
}

@Injectable()
export class DeletePostService implements IDeletePostService {
  constructor(
    @Inject('IPostRepository') private readonly postRepository: IPostRepository,
  ) {}

  async exec(id: number) {
    return await this.postRepository.delete(id);
  }
}
