import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts.controller';
import { CreatePostService } from './service/create-post/create-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { PostRepository } from './repository/post.repository';
import { DeletePostService } from './service/delete-post/delete-post.service';
import { UsersModule } from 'src/users/users.module';
import { FindPostService } from './service/find-post.service.ts/find-post.service';

const repositoryProviders = [
  {
    provide: 'IPostRepository',
    useClass: PostRepository,
  },
];

const serviceProviders = [
  {
    provide: 'ICreatePostService',
    useClass: CreatePostService,
  },
  {
    provide: 'IDeletePostService',
    useClass: DeletePostService,
  },
  {
    provide: 'IFindPostService',
    useClass: FindPostService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), UsersModule],
  controllers: [PostsController],
  providers: [...repositoryProviders, ...serviceProviders],
})
export class PostsModule {}
