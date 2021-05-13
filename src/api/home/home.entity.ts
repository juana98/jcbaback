import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity()
export class Home {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  image: string;

}