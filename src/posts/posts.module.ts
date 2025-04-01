import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts.controller';
import { CreatePostService } from './service/create-post/create-post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { PostRepository } from './repository/post.repository';
import { DeletePostService } from './service/delete-post/delete-post.service';
import { UsersModule } from 'src/users/users.module';
import { FindPostService } from './service/find-post.service.ts/find-post.service';
import { UpdatePostService } from './service/update-post/update-post.service';
import { DeleteUserPostsService } from './service/delete-user-posts/delete-user-posts.service';

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
    provide: 'IUpdatePostService',
    useClass: UpdatePostService,
  },
  {
    provide: 'IDeletePostService',
    useClass: DeletePostService,
  },
  {
    provide: 'IFindPostService',
    useClass: FindPostService,
  },
  {
    provide: 'IDeleteUserPostsService',
    useClass: DeleteUserPostsService,
  },
];

const exportsServices = [
  {
    provide: 'IDeleteUserPostsService',
    useClass: DeleteUserPostsService,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity]), UsersModule],
  controllers: [PostsController],
  providers: [...repositoryProviders, ...serviceProviders],
  exports: [...exportsServices],
})
export class PostsModule {}
