import { UpdateMuscleDto } from './dto/update-muscle.dto';
import { CreateMuscleDto } from './dto/create-muscle.dto';
import { Injectable } from '@nestjs/common';
// import exampleOfAllMuscles from '../../json-examples/getAllMuscles.json';

@Injectable()
export class MusclesService {
  exampleOfAllMuscles = require('../../json-examples/getAllMuscles.json');
  exampleOfSingleMuscles = require('../../json-examples/getSingleMuscle.json');

  getAll() {
    const result = this.exampleOfAllMuscles;
    return result;
  }

  getMuscleByID(muscleID: number) {
    const result = this.exampleOfSingleMuscles;
    return result;
  }

  createMuscle(createMuscleDto: CreateMuscleDto) {
    return createMuscleDto;
  }

  updateMuscle(muscleID: number, updateMuscleDto: UpdateMuscleDto) {
    return { muscleID, updateMuscleDto };
  }

  deleteMuscle(muscleID: number) {
    return `Delete ${muscleID}`;
  }
}
