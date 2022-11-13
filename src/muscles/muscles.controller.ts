import { MusclesService } from './muscles.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('muscles')
export class MusclesController {
  constructor(private musclesService: MusclesService) {}

  @Get()
  getExercises() {
    return this.musclesService.getAll();
  }

  @Get('/:muscleID')
  getSingleExercise(@Param() params: { muscleID: number }) {
    return this.musclesService.getMuscleByID(params.muscleID);
  }
}
