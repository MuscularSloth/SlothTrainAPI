import { Equipment } from './entity/equipment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';

@Module({
  controllers: [EquipmentController],
  providers: [EquipmentService],
  imports: [TypeOrmModule.forFeature([Equipment])],
})
export class EquipmentModule {}
