import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { ExercisesService } from './exercises.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @Get()
  getExercises() {
    return this.exercisesService.getAll();
  }

  @Get('/:exercisesID')
  getSingleExercise(@Param('exercisesID', ParseIntPipe) exercisesID: number) {
    return this.exercisesService.getExerciseByID(exercisesID);
  }

  @Post()
  createExercise(@Body() createExerciseDto: CreateExerciseDto) {
    return this.exercisesService.createExercise(createExerciseDto);
  }

  @Patch('/:exercisesID')
  updateExercise(
    @Param('exercisesID', ParseIntPipe) exercisesID: number,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.exercisesService.updateExercise(exercisesID, updateExerciseDto);
  }

  @Delete('/:exercisesID')
  deleteExercise(@Param('exercisesID', ParseIntPipe) exercisesID: number) {
    return this.exercisesService.deleteExercise(exercisesID);
  }
}
