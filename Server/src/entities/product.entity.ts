import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class product {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id!: number;
  
  @Column({ type: 'varchar', length: 255 })
  name!: string;

  @Column({ type: 'int' })
  price!: number;

  @Column({ type: 'int' })
  sku!: string;

  @Column({ type: 'varchar', length: 255 })
  description!: string;

  // @Column({ type: 'text', array: true })
  // images!: string[];
  @Column("simple-array")
  images!: string[];
}
