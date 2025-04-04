import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentEntity } from '../entity/comment.entity';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';

export interface ICommentRepository {
  find: (id: number) => Promise<CommentEntity | null>;
  create: (data: CreateCommentDto) => Promise<CommentEntity>;
  update: (id: number, data: UpdateCommentDto) => Promise<CommentEntity>;
  delete: (id: number) => Promise<void>;
}

@Injectable()
export class CommentRepository implements ICommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly repository: Repository<CommentEntity>,
  ) {}

  async find(id: number) {
    return await this.repository.findOneBy({
      id,
    });
  }

  async create(data: CreateCommentDto) {
    const comment = this.repository.create(data);
    return await this.repository.save(comment);
  }

  async update(id: number, data: UpdatePostDto) {
    const comment = await this.find(id);
    return await this.repository.save({ ...comment, ...data });
  }

  async delete(id: number) {
    await this.repository.softDelete(id);
  }
}
