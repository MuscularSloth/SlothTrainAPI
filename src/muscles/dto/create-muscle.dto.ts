import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateMuscleDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsString()
  image: string;
}
