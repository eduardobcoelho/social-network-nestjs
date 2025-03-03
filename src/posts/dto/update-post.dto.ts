import { IsString, MaxLength } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @MaxLength(1000)
  text: string;
}
