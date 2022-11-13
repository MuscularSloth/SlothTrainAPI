import { Injectable } from '@nestjs/common';

@Injectable()
export class EquipmentService {
  getAll() {
    return 'All the equipments';
  }

  getEquipmentByID(equipmentID: number) {
    return `Equipment ${equipmentID}`;
  }
}
