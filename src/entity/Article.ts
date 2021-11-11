import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { Tag } from './Tag';
import { User } from './User';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  content: string;

  @Column()
  isPublic: boolean;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

}