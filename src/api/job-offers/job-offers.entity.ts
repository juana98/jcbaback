import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity()
export class JobOffers {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  filename: string;

}