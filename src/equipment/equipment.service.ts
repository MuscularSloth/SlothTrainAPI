import { Injectable } from '@nestjs/common';

@Injectable()
export class EquipmentService {
  getAll() {
    return 'All the equipments';
  }

  getEquipmentByID(equipmentID: number) {
    return `Equipment ${equipmentID}`;
  }

  createEquipment(body: any) {
    return body;
  }

  updateEquipment(equipmentID: number, body: any) {
    return { equipmentID, body };
  }

  deleteEquipment(equipmentID: number) {
    return `Delete ${equipmentID}`;
  }
}
