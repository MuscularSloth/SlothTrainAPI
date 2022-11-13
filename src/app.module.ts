import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExercisesModule } from './exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';
import { EquipmentModule } from './equipment/equipment.module';
import { MusclesModule } from './muscles/muscles.module';

@Module({
  controllers: [AppController],
  imports: [ExercisesModule, ConfigModule.forRoot(), EquipmentModule, MusclesModule],
})
export class AppModule {}
