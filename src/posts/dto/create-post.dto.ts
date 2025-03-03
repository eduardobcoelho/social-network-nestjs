import { IsNumber, IsString, Max } from 'class-validator';

export class CreatePostDto {
  @IsNumber() userId: number;

  @IsString()
  @Max(1000)
  text: string;
}
