import { Exercise } from './../../exercises/entity/exercise.entity';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class UpdateEquipmentDto {
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
  exercises: Exercise[];
}
