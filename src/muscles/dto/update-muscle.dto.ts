import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateMuscleDto {
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
