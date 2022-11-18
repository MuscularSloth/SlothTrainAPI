import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateExerciseDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsOptional()
  @IsString()
  description: string;
  @IsOptional()
  @IsString()
  image: string;
  @IsOptional()
  equipment: number[];
  @IsOptional()
  muscleMain: number[];
  @IsOptional()
  muscleAdditional: number[];
  @IsOptional()
  alternativeExercises: number[];
}
