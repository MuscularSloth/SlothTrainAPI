import { Exercise } from './exercises/entity/exercise.entity';
import { Equipment } from './equipment/entity/equipment.entity';
import { Muscle } from './muscles/entity/muscle.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ExercisesModule } from './exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';
import { EquipmentModule } from './equipment/equipment.module';
import { MusclesModule } from './muscles/muscles.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  imports: [
    ExercisesModule,
    EquipmentModule,
    MusclesModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number.isNaN(parseInt(process.env.DATABASE_PORT))
        ? 3306
        : parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Muscle, Equipment, Exercise],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
