import { Injectable } from '@nestjs/common';

@Injectable()
export class ExercisesService {
  getAll() {
    return 'All the exercises';
  }

  getExerciseByID(exercisesID: number) {
    return `Exercise ${exercisesID}`;
  }

  createExercise(body: any) {
    return body;
  }

  updateExercise(exercisesID: number, body: any) {
    return { exercisesID, body };
  }

  deleteExercise(exercisesID: number) {
    return `Delete ${exercisesID}`;
  }
}
