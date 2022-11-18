import { Equipment } from './../../equipment/entity/equipment.entity';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateExerciseDto {
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
  equipment: Equipment[];
}
