import { Exercise } from './../../exercises/entity/exercise.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('muscles')
export class Muscle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  // @ManyToMany(() => Exercise, (exercise) => exercise.muscleMain)
  // exercisesMain: Exercise[];

  // @ManyToMany(() => Exercise, (exercise) => exercise.muscleAdditional)
  // exercisesAdditional: Exercise[];
}
