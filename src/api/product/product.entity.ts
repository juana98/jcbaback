import { Column, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  isActive: boolean;
  
}