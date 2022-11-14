import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from './entity/exercise.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  getAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  getExerciseByID(exercisesID: number): Promise<Exercise> {
    return this.exerciseRepository.findOne({ where: { id: exercisesID } });
  }

  createExercise(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    return this.exerciseRepository.save(createExerciseDto);
  }

  updateExercise(
    exercisesID: number,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<any> {
    return this.exerciseRepository.update(exercisesID, updateExerciseDto);
  }

  deleteExercise(exercisesID: number): Promise<any> {
    return this.exerciseRepository.delete(exercisesID);
  }
}
