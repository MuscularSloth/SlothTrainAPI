import { Equipment } from './../equipment/entity/equipment.entity';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from './entity/exercise.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  getAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find({
      relations: [
        'equipment',
        // 'muscleMain',
        // 'muscleAdditional',
        // 'alternativeExercises',
      ],
    });
  }

  getExerciseByID(exercisesID: number): Promise<Exercise> {
    return this.exerciseRepository.findOne({ where: { id: exercisesID } });
  }

  createExercise(createExerciseDto: CreateExerciseDto): Promise<Exercise> {
    const newExercise = this.exerciseRepository.create(createExerciseDto);
    // const exerciseEquipments = equipment.map(
    //   async (equipmentId) =>
    //     !Number.isNaN(equipmentId) &&
    //     (await this.equipmentRepository.findOne({
    //       where: { id: equipmentId.id },
    //     })),
    // );
    // console.log('equipment >>> ', equipment);

    // newExercise.equipment = equipment;
    return this.exerciseRepository.save(newExercise);
  }

  updateExercise(
    exercisesID: number,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<any> {
    return this.exerciseRepository.update(exercisesID, updateExerciseDto);
  }

  deleteExercise(exercisesID: number): Promise<any> {
    return this.exerciseRepository.delete(exercisesID);
  }
}
