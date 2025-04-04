import { Inject, Injectable } from '@nestjs/common';
import { ICommentRepository } from 'src/comments/repository/comment.repository';

export interface IDeleteCommentService {
  exec: (id: number) => Promise<void>;
}

@Injectable()
export class DeleteCommentService implements IDeleteCommentService {
  constructor(
    @Inject('ICommentRepository')
    private readonly commentRepository: ICommentRepository,
  ) {}

  async exec(id: number) {
    await this.commentRepository.delete(id);
  }
}
