import { UpdateMuscleDto } from './dto/update-muscle.dto';
import { CreateMuscleDto } from './dto/create-muscle.dto';
import { MusclesService } from './muscles.service';
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

@Controller('muscles')
export class MusclesController {
  constructor(private musclesService: MusclesService) {}

  @Get()
  getMuscles() {
    return this.musclesService.getAll();
  }

  @Get('/:muscleID')
  getSingleMuscle(@Param('muscleID', ParseIntPipe) muscleID: number) {
    return this.musclesService.getMuscleByID(muscleID);
  }

  @Post()
  createMuscle(@Body() createMuscleDto: CreateMuscleDto) {
    return this.musclesService.createMuscle(createMuscleDto);
  }

  @Patch('/:muscleID')
  updateMuscle(
    @Param('muscleID', ParseIntPipe) muscleID: number,
    @Body() updateMuscleDto: UpdateMuscleDto,
  ) {
    return this.musclesService.updateMuscle(muscleID, updateMuscleDto);
  }

  @Delete('/:muscleID')
  deleteMuscle(@Param('muscleID', ParseIntPipe) muscleID: number) {
    return this.musclesService.deleteMuscle(muscleID);
  }
}
