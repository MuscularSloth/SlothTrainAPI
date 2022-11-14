import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Equipment } from './entity/equipment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  getAll(): Promise<Equipment[]> {
    return this.equipmentRepository.find();
  }

  getEquipmentByID(equipmentID: number): Promise<Equipment> {
    return this.equipmentRepository.findOne({ where: { id: equipmentID } });
  }

  createEquipment(createEquipmentDto: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentRepository.save(createEquipmentDto);
  }

  updateEquipment(
    equipmentID: number,
    updateEquipmentDto: UpdateEquipmentDto,
  ): Promise<any> {
    return this.equipmentRepository.update(equipmentID, updateEquipmentDto);
  }

  deleteEquipment(equipmentID: number) {
    return this.equipmentRepository.delete(equipmentID);
  }
}
