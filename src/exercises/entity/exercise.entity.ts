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

  @ManyToMany(() => Equipment, {
    cascade: true,
  })
  @JoinTable()
  equipment: Equipment[];

  @ManyToMany(() => Muscle, {
    cascade: true,
  })
  @JoinTable()
  muscleMain: Muscle[];

  @ManyToMany(() => Muscle, {
    cascade: true,
  })
  @JoinTable()
  muscleAdditional: Muscle[];

  @ManyToMany(() => Exercise, {
    cascade: true,
  })
  @JoinTable()
  alternativeExercises: Exercise[];
}
