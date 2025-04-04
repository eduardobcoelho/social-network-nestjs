import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CommentEntity } from 'src/comments/entity/comment.entity';
import { ICommentRepository } from 'src/comments/repository/comment.repository';

export interface IFindCommentService {
  exec: (id: number) => Promise<CommentEntity>;
}

@Injectable()
export class FindCommentService implements IFindCommentService {
  constructor(
    @Inject('ICommentRepository')
    private readonly commentRepository: ICommentRepository,
  ) {}

  async exec(id: number) {
    const comment = await this.commentRepository.find(id);
    if (!comment) throw new NotFoundException('Comentário não encontrado');

    return comment;
  }
}
