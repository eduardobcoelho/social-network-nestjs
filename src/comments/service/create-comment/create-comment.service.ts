import { Inject, Injectable } from '@nestjs/common';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';
import { CommentEntity } from 'src/comments/entity/comment.entity';
import { ICommentRepository } from 'src/comments/repository/comment.repository';
import { IFindPostService } from 'src/posts/service/find-post/find-post.service';
import { IFindUserService } from 'src/users/service/find-user/find-user.service';

export interface ICreateCommentService {
  exec: (data: CreateCommentDto) => Promise<CommentEntity>;
}

@Injectable()
export class CreateCommentService implements ICreateCommentService {
  constructor(
    @Inject('ICommentRepository')
    private readonly commentRepository: ICommentRepository,

    @Inject('IFindUserService')
    private readonly findUserService: IFindUserService,

    @Inject('IFindPostService')
    private readonly findPostService: IFindPostService,
  ) {}

  async exec(data: CreateCommentDto) {
    const { userId, postId } = data;

    await this.findUserService.exec(userId);
    await this.findPostService.exec(postId);

    return await this.commentRepository.create(data);
  }
}
