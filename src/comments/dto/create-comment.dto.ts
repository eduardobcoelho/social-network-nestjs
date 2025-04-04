import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateCommentDto {
  @IsNumber() userId: number;

  @IsNumber() postId: number;

  @IsString()
  @MaxLength(1000)
  text: string;
}
