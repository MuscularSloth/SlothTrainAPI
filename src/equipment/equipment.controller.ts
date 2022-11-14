import { EquipmentService } from './equipment.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';

@Controller('equipment')
export class EquipmentController {
  constructor(private equipmentService: EquipmentService) {}

  @Get()
  getExercises() {
    return this.equipmentService.getAll();
  }

  @Get('/:equipmentID')
  getSingleExercise(@Param() params: { equipmentID: number }) {
    return this.equipmentService.getEquipmentByID(params.equipmentID);
  }

  @Post()
  createMuscle(@Body() body: any) {
    return this.equipmentService.createEquipment(body);
  }

  @Patch('/:equipmentID')
  updateMuscle(@Param() params: { equipmentID: number }, @Body() body: any) {
    return this.equipmentService.updateEquipment(params.equipmentID, body);
  }

  @Delete('/:equipmentID')
  deleteMuscle(@Param() params: { equipmentID: number }) {
    return this.equipmentService.deleteEquipment(params.equipmentID);
  }
}
