import { Equipment } from './../equipment/entity/equipment.entity';
import { Exercise } from './entity/exercise.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
  imports: [TypeOrmModule.forFeature([Exercise, Equipment])],
})
export class ExercisesModule {}
