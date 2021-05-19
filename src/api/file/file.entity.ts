import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class File {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  idFile: number;

  @Column()
  filename: string;

  @Column()
  foldername: string;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

  @Column()
  url: string;

  @ManyToOne(type => User, user => user.files)
  user: User;
  
}