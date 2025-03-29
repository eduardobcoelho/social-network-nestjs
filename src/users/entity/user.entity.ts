import { UserGender } from 'src/users/enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users', schema: 'USERS' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  @Unique(['email'])
  email: string;

  @Column({ length: 255 })
  @Unique(['document'])
  document: string;

  @Column({ type: 'enum', enum: UserGender })
  gender: UserGender;

  @Column()
  birthDate: Date;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
