import { EquipmentService } from './equipment.service';
import { Controller, Get, Param } from '@nestjs/common';

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
}
