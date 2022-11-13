import { Injectable } from '@nestjs/common';

@Injectable()
export class MusclesService {
  getAll() {
    return 'All the muscles';
  }

  getMuscleByID(muscleID: number) {
    return `Muscle ${muscleID}`;
  }
}
