import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class File {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  idFile: number;

  @Column()
  name: string;

  @Column()
  filename: string;

  @Column()
  isActive: boolean;

  @ManyToOne(type => User, user => user.files)
  user: User;
  
}