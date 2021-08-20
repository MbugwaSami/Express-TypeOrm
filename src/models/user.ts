import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Wishlist } from "./wishList";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userName!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @OneToMany((_type) => Wishlist, (wishlist: Wishlist) => wishlist.user)
  wishlist!: Array<Wishlist>;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
