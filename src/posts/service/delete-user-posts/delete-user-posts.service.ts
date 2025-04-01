import { Inject, Injectable } from '@nestjs/common';
import { IPostRepository } from 'src/posts/repository/post.repository';

export interface IDeleteUserPostsService {
  exec: (userId: number) => Promise<void>;
}

@Injectable()
export class DeleteUserPostsService implements IDeleteUserPostsService {
  constructor(
    @Inject('IPostRepository') private readonly postRepository: IPostRepository,
  ) {}

  async exec(userId: number) {
    return await this.postRepository.deleteUserPosts(userId);
  }
}
