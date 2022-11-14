import { Module } from '@nestjs/common';
import { MusclesController } from './muscles.controller';
import { MusclesService } from './muscles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Muscle } from './entity/muscle.entity';

@Module({
  controllers: [MusclesController],
  providers: [MusclesService],
  imports: [TypeOrmModule.forFeature([Muscle])],
})
export class MusclesModule {}
