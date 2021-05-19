import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, OneToMany, BeforeInsert, BeforeUpdate } from 'typeorm';
import { File } from '../file/file.entity';
import { hash } from 'bcrypt';

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
  role: string[];

  @Column()
  email: string;

  @Column()
  isActive: boolean;

  @OneToMany(type => File, file => file.user)
  files: File[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(){ 
    if(!this.password){
      return;
    }
    this.password = await hash(this.password,10);
  }
  
}