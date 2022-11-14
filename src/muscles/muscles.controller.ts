import { MusclesService } from './muscles.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('muscles')
export class MusclesController {
  constructor(private musclesService: MusclesService) {}

  @Get()
  getMuscles() {
    return this.musclesService.getAll();
  }

  @Get('/:muscleID')
  getSingleMuscle(@Param() params: { muscleID: number }) {
    return this.musclesService.getMuscleByID(params.muscleID);
  }

  @Post()
  createMuscle(@Body() body: any) {
    return this.musclesService.createMuscle(body);
  }

  @Patch('/:muscleID')
  updateMuscle(@Param() params: { muscleID: number }, @Body() body: any) {
    return this.musclesService.updateMuscle(params.muscleID, body);
  }

  @Delete('/:muscleID')
  deleteMuscle(@Param() params: { muscleID: number }) {
    return this.musclesService.deleteMuscle(params.muscleID);
  }
}
