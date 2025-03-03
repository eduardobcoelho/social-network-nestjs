import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsNumber() userId: number;

  @IsString()
  @MaxLength(1000)
  text: string;
}
