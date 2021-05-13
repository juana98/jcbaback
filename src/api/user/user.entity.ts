import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, OneToMany } from 'typeorm';
import { File } from '../file/file.entity';
import { Role } from './role.enum';

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  idUser: number;

  @Column()
  name: string;
  
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: Role[];

  @Column()
  email: string;

  @Column()
  isActive: boolean;

  @OneToMany(type => File, file => file.user)
  files: File[];
  
}