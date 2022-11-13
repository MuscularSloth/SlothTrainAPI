import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExercisesModule } from './exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';
import { EquipmentModule } from './equipment/equipment.module';

@Module({
  controllers: [AppController],
  imports: [ExercisesModule, ConfigModule.forRoot(), EquipmentModule],
})
export class AppModule {}
