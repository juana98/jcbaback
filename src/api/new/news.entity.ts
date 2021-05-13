import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity()
export class New {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

}