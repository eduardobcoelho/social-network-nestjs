import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto } from '../dto/create-post.dto';
import { PostEntity } from '../entity/post.entity';
import { UpdatePostDto } from '../dto/update-post.dto';

export interface IPostRepository {
  find: (id: number) => Promise<PostEntity | null>;
  create: (data: CreatePostDto) => Promise<PostEntity>;
  update: (id: number, data: UpdatePostDto) => Promise<PostEntity>;
  delete: (id: number) => Promise<void>;
  deleteUserPosts: (userId: number) => Promise<void>;
}

@Injectable()
export class PostRepository implements IPostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private repository: Repository<PostEntity>,
  ) {}

  async find(id: number) {
    return await this.repository.findOneBy({
      id,
    });
  }

  async create(data: CreatePostDto) {
    const post = this.repository.create(data);
    return await this.repository.save(post);
  }

  async update(id: number, data: UpdatePostDto) {
    const post = await this.find(id);
    return await this.repository.save({ ...post, ...data });
  }

  async delete(id: number) {
    await this.repository.softDelete(id);
  }

  async deleteUserPosts(userId: number) {
    await this.repository.update({ userId }, { deletedAt: new Date() });
  }
}
