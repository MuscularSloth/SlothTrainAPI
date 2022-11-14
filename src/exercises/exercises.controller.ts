import { ExercisesService } from './exercises.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

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

  @Post()
  createMuscle(@Body() body: any) {
    return this.exercisesService.createExercise(body);
  }

  @Patch('/:exercisesID')
  updateMuscle(@Param() params: { exercisesID: number }, @Body() body: any) {
    return this.exercisesService.updateExercise(params.exercisesID, body);
  }

  @Delete('/:exercisesID')
  deleteMuscle(@Param() params: { exercisesID: number }) {
    return this.exercisesService.deleteExercise(params.exercisesID);
  }
}
