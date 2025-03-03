import { IsString, Max } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @Max(1000)
  text: string;
}
