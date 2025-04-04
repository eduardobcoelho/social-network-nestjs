import { Injectable } from '@nestjs/common';
import { CommentEntity } from 'src/comments/entity/comment.entity';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';

export interface IUpdateCommentService {
  exec: (data: UpdatePostDto) => Promise<CommentEntity>;
}

@Injectable()
export class UpdateCommentService implements IUpdateCommentService {
  exec(data: UpdatePostDto) {
    console.log(data);
    return Promise.resolve({} as CommentEntity);
  }
}
