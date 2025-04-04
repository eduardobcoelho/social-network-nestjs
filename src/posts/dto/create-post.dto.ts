import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNumber() userId: number;

  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  text: string;
}
