import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsNumber() userId: number;

  @IsNumber() postId: number;

  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  text: string;
}
