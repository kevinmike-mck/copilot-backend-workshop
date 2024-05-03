import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('identity')
  id!: number;

  @Column('text')
  name!: string;

  @Column('float')
  price!: number;

  @Column('text')
  description!: string;
}