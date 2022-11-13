import { ExercisesService } from './exercises.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  getExercises() {
    return this.exercisesService.getAll();
  }

  @Get('/:exercisesID')
  getSingleExercise(@Param() params: { exercisesID: number }) {
    return this.exercisesService.getExerciseByID(params.exercisesID);
  }
}
