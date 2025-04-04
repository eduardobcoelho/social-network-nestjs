import { Injectable } from '@nestjs/common';
import { CommentEntity } from 'src/comments/entity/comment.entity';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

export interface ICreateCommentService {
  exec: (data: CreatePostDto) => Promise<CommentEntity>;
}

@Injectable()
export class CreateCommentService implements ICreateCommentService {
  exec(data: CreatePostDto) {
    console.log(data);
    return Promise.resolve({} as CommentEntity);
  }
}
