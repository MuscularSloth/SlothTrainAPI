import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Muscle } from './entity/muscle.entity';
import { UpdateMuscleDto } from './dto/update-muscle.dto';
import { CreateMuscleDto } from './dto/create-muscle.dto';

@Injectable()
export class MusclesService {
  constructor(
    @InjectRepository(Muscle)
    private muscleRepository: Repository<Muscle>,
  ) {}

  getAll(): Promise<Muscle[]> {
    return this.muscleRepository.find();
  }

  getMuscleByID(muscleID: number): Promise<Muscle> {
    return this.muscleRepository.findOne({ where: { id: muscleID } });
  }

  createMuscle(createMuscleDto: CreateMuscleDto): Promise<Muscle> {
    return this.muscleRepository.save(createMuscleDto);
  }

  updateMuscle(
    muscleID: number,
    updateMuscleDto: UpdateMuscleDto,
  ): Promise<any> {
    return this.muscleRepository.update(muscleID, updateMuscleDto);
  }

  deleteMuscle(muscleID: number): Promise<any> {
    return this.muscleRepository.delete(muscleID);
  }
}
