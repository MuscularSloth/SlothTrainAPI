import { Exercise } from './../../exercises/entity/exercise.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('equipments')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  image: string;

  // @ManyToMany(() => Exercise, (exercise) => exercise.equipment)
  // exercises: Exercise[];
}
