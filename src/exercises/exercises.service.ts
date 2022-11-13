import { Injectable } from '@nestjs/common';

@Injectable()
export class ExercisesService {
  getAll() {
    return 'All the exercises';
  }

  getExerciseByID(exercisesID: number) {
    return `Exercise ${exercisesID}`;
  }
}
