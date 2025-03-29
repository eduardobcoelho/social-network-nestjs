import { UserGender } from 'src/users/enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  document: string;

  @Column({ type: 'enum', enum: UserGender })
  gender: UserGender;

  @Column()
  birthDate: Date;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
