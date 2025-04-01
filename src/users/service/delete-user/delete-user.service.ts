import { Inject, Injectable } from '@nestjs/common';
import { IDeleteUserPostsService } from 'src/posts/service/delete-user-posts/delete-user-posts.service';
import { IUserRepository } from 'src/users/repository/user.repository';

export interface IDeleteUserService {
  exec: (id: number) => Promise<void>;
}

@Injectable()
export class DeleteUserService implements IDeleteUserService {
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,

    @Inject('IDeleteUserPostsService')
    private readonly deleteUserPostsService: IDeleteUserPostsService,
  ) {}

  async exec(id: number) {
    await this.userRepository.delete(id);
    await this.deleteUserPostsService.exec(id);
  }
}
