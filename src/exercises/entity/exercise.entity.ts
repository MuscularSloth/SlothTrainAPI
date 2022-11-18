import { Muscle } from './../../muscles/entity/muscle.entity';
import { Equipment } from './../../equipment/entity/equipment.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: 1 })
  difficulty: number;

  @Column({ type: 'boolean', default: false })
  isIsolation: boolean;

  @ManyToMany(() => Equipment, (equipment) => equipment.exercises)
  @JoinTable()
  equipment: Equipment[];

  // @ManyToMany(() => Muscle, (muscle) => muscle.exercisesMain)
  // muscleMain: Muscle[];

  // @ManyToMany(() => Muscle, (muscle) => muscle.exercisesAdditional)
  // muscleAdditional: Muscle[];

  // alternativeExercises: Exercise[];
}
