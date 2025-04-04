import { Inject, Injectable } from '@nestjs/common';
import { CommentEntity } from 'src/comments/entity/comment.entity';
import { ICommentRepository } from 'src/comments/repository/comment.repository';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';
import { IFindCommentService } from '../find-comment/find-comment.service';
import { UpdateCommentDto } from 'src/comments/dto/update-comment.dto';

export interface IUpdateCommentService {
  exec: (id: number, data: UpdatePostDto) => Promise<CommentEntity>;
}

@Injectable()
export class UpdateCommentService implements IUpdateCommentService {
  constructor(
    @Inject('ICommentRepository')
    private readonly commentRepository: ICommentRepository,

    @Inject('IFindCommentService')
    private readonly findCommentService: IFindCommentService,
  ) {}

  async exec(id: number, data: UpdateCommentDto) {
    await this.findCommentService.exec(id);

    const dtoValidKeys: Array<keyof UpdateCommentDto> = ['text'];
    const dataSerialized = dtoValidKeys.reduce((acc, cur) => {
      if (data[cur]) {
        acc[cur] = data[cur];
      }
      return acc;
    }, {});

    return await this.commentRepository.update(
      id,
      dataSerialized as UpdateCommentDto,
    );
  }
}
