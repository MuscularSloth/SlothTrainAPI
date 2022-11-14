import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { EquipmentService } from './equipment.service';
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

@Controller('equipment')
export class EquipmentController {
  constructor(private equipmentService: EquipmentService) {}

  @Get()
  getEquipments() {
    return this.equipmentService.getAll();
  }

  @Get('/:equipmentID')
  getSingleEquipment(@Param('equipmentID', ParseIntPipe) equipmentID: number) {
    return this.equipmentService.getEquipmentByID(equipmentID);
  }

  @Post()
  createEquipment(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.createEquipment(createEquipmentDto);
  }

  @Patch('/:equipmentID')
  updateEquipment(
    @Param('equipmentID', ParseIntPipe) equipmentID: number,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return this.equipmentService.updateEquipment(
      equipmentID,
      updateEquipmentDto,
    );
  }

  @Delete('/:equipmentID')
  deleteEquipment(@Param('equipmentID', ParseIntPipe) equipmentID: number) {
    return this.equipmentService.deleteEquipment(equipmentID);
  }
}
