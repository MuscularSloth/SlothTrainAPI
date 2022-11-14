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

  createMuscle(body: any) {
    return body;
  }

  updateMuscle(muscleID: number, body: any) {
    return { muscleID, body };
  }

  deleteMuscle(muscleID: number) {
    return `Delete ${muscleID}`;
  }
}
