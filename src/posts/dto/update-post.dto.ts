import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @MinLength(10)
  @MaxLength(1000)
  text: string;
}
