import { Inject, Injectable } from '@nestjs/common';
import { PostEntity } from 'src/posts/entity/post.entity';
import { IPostRepository } from 'src/posts/repository/post.repository';
import { IFindPostService } from '../find-post.service.ts/find-post.service';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';

export interface IUpdatePostService {
  exec: (id: number, data: UpdatePostDto) => Promise<PostEntity>;
}

@Injectable()
export class UpdatePostService implements IUpdatePostService {
  constructor(
    @Inject('IPostRepository') private readonly postRepository: IPostRepository,

    @Inject('IFindPostService')
    private readonly findPostService: IFindPostService,
  ) {}

  async exec(id: number, data: UpdatePostDto) {
    await this.findPostService.exec(id);
    const dtoValidKeys: Array<keyof UpdatePostDto> = ['text'];
    const dataSerialized = dtoValidKeys.reduce((acc, cur) => {
      if (data[cur]) {
        acc[cur] = data[cur];
      }
      return acc;
    }, {});
    return await this.postRepository.update(
      id,
      dataSerialized as UpdatePostDto,
    );
  }
}
