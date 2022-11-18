import { Muscle } from './../muscles/entity/muscle.entity';
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
    @InjectRepository(Muscle)
    private muscleRepository: Repository<Muscle>,
  ) {}

  getAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find({
      relations: [
        'equipment',
        'muscleMain',
        'muscleAdditional',
        'alternativeExercises',
      ],
    });
  }

  getExerciseByID(exercisesID: number): Promise<Exercise> {
    return this.exerciseRepository.findOne({
      where: { id: exercisesID },
      relations: [
        'equipment',
        'muscleMain',
        'muscleAdditional',
        'alternativeExercises',
      ],
    });
  }

  async createExercise(createExerciseDto: CreateExerciseDto): Promise<any> {
    const {
      equipment: equipmentArray,
      muscleMain: muscleMainArray,
      muscleAdditional: muscleAdditionalArray,
      alternativeExercises: alternativeExercisesArray,
      ...restExerciseFields
    } = createExerciseDto;
    const newExercise = this.exerciseRepository.create({
      ...restExerciseFields,
      equipment: [],
      muscleMain: [],
      muscleAdditional: [],
      alternativeExercises: [],
    });

    if (equipmentArray) {
      for (const equipmentID of equipmentArray) {
        const equip = await this.equipmentRepository.findOne({
          where: { id: equipmentID },
        });
        if (!equip) {
          console.log(`Equipment ${equipmentID} not found`);
        } else {
          newExercise.equipment.push(equip);
        }
      }
    }

    if (muscleMainArray) {
      for (const muscleID of muscleMainArray) {
        const muscle = await this.muscleRepository.findOne({
          where: { id: muscleID },
        });
        if (!muscle) {
          console.log(`Main muscle ${muscleID} not found`);
        } else {
          newExercise.muscleMain.push(muscle);
        }
      }
    }

    if (muscleAdditionalArray) {
      for (const muscleID of muscleAdditionalArray) {
        const muscle = await this.muscleRepository.findOne({
          where: { id: muscleID },
        });
        if (!muscle) {
          console.log(`Additional muscle ${muscleID} not found`);
        } else {
          newExercise.muscleAdditional.push(muscle);
        }
      }
    }

    if (alternativeExercisesArray) {
      for (const exerciseID of alternativeExercisesArray) {
        const exercise = await this.exerciseRepository.findOne({
          where: { id: exerciseID },
        });
        if (!exercise) {
          console.log(`Additional muscle ${exerciseID} not found`);
        } else {
          newExercise.alternativeExercises.push(exercise);
        }
      }
    }

    console.log('newExercise >>> ', newExercise);

    return this.exerciseRepository.save(newExercise);
  }

  async updateExercise(
    exercisesID: number,
    updateExerciseDto: UpdateExerciseDto,
  ): Promise<any> {
    const {
      equipment: equipmentArray,
      muscleMain: muscleMainArray,
      muscleAdditional: muscleAdditionalArray,
      alternativeExercises: alternativeExercisesArray,
      ...restExerciseFields
    } = updateExerciseDto;
    const updatedExercise = this.exerciseRepository.create({
      ...restExerciseFields,
      equipment: [],
      muscleMain: [],
      muscleAdditional: [],
      alternativeExercises: [],
    });

    if (equipmentArray) {
      for (const equipmentID of equipmentArray) {
        const equip = await this.equipmentRepository.findOne({
          where: { id: equipmentID },
        });
        if (!equip) {
          console.log(`Equipment ${equipmentID} not found`);
        } else {
          updatedExercise.equipment.push(equip);
        }
      }
    }

    if (muscleMainArray) {
      for (const muscleID of muscleMainArray) {
        const muscle = await this.muscleRepository.findOne({
          where: { id: muscleID },
        });
        if (!muscle) {
          console.log(`Equipment ${muscleID} not found`);
        } else {
          updatedExercise.muscleMain.push(muscle);
        }
      }
    }

    if (muscleAdditionalArray) {
      for (const muscleID of muscleAdditionalArray) {
        const muscle = await this.muscleRepository.findOne({
          where: { id: muscleID },
        });
        if (!muscle) {
          console.log(`Equipment ${muscleID} not found`);
        } else {
          updatedExercise.muscleAdditional.push(muscle);
        }
      }
    }

    if (alternativeExercisesArray) {
      for (const exerciseID of alternativeExercisesArray) {
        const exercise = await this.exerciseRepository.findOne({
          where: { id: exerciseID },
        });
        if (!exercise) {
          console.log(`Additional muscle ${exerciseID} not found`);
        } else {
          updatedExercise.alternativeExercises.push(exercise);
        }
      }
    }

    const currentExercise = this.exerciseRepository.findOne({
      where: { id: exercisesID },
    });
    if (currentExercise) updatedExercise.id = exercisesID;

    return this.exerciseRepository.save(updatedExercise);
  }

  deleteExercise(exercisesID: number): Promise<any> {
    return this.exerciseRepository.delete(exercisesID);
  }
}
