import { Injectable } from '@nestjs/common';

export interface IDeleteCommentService {
  exec: (commentId: number) => Promise<void>;
}

@Injectable()
export class DeleteCommentService implements IDeleteCommentService {
  async exec(commentId: number) {
    console.log(commentId);
  }
}
