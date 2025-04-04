import { Module } from '@nestjs/common';
import { CommentsController } from './controller/comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comment.entity';
import { CreateCommentService } from './service/create-comment/create-comment.service';
import { UpdateCommentService } from './service/update-comment/update-comment.service';
import { DeleteCommentService } from './service/delete-comment/delete-comment.service';
import { CommentRepository } from './repository/comment.repository';
import { FindCommentService } from './service/find-comment/find-comment.service';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';

const repositoryProviders = [
  {
    provide: 'ICommentRepository',
    useClass: CommentRepository,
  },
];

const serviceProviders = [
  {
    provide: 'ICreateCommentService',
    useClass: CreateCommentService,
  },
  {
    provide: 'IFindCommentService',
    useClass: FindCommentService,
  },
  {
    provide: 'IUpdateCommentService',
    useClass: UpdateCommentService,
  },
  {
    provide: 'IDeleteCommentService',
    useClass: DeleteCommentService,
  },
];

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity]),
    UsersModule,
    PostsModule,
  ],
  controllers: [CommentsController],
  providers: [...repositoryProviders, ...serviceProviders],
})
export class CommentsModule {}
