import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from '../entity/post.entity';

export interface IPostRepository {
  create: (data: CreatePostDto) => Promise<PostEntity>;
  delete: (id: number) => Promise<void>;
}

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  async create(data: CreatePostDto) {
    const post = this.repository.create(data);
    return await this.repository.save(post);
  }

  async delete(id: number) {
    await this.repository.softDelete(id);
  }
}
