import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entity/post.entity';
import { randomInt } from 'crypto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  async fetchAll(page: number, limit: number) {
    console.log(page, limit);

    return this.posts;
  }

  async find(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const postCreated = {
      id: randomInt(1000000),
      ...createPostDto,
      createdAt: new Date(),
    };
    this.posts.push(postCreated);

    return postCreated;
  }

  async update(post: Post, updatePostDto: UpdatePostDto): Promise<Post> {
    const postUpdated = {
      ...post,
      ...updatePostDto,
      updatedAt: new Date(),
      id: post.id,
    };
    Object.assign(post, postUpdated);

    return postUpdated;
  }

  async delete(id: number) {
    this.posts = this.posts.filter((post) => post.id !== id);
    return;
  }
}
