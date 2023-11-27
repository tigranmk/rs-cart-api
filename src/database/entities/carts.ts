import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { CartItem } from './cartItem';

export enum CartStatus {
  OPEN = 'OPEN',
  ORDERED = 'ORDERED',
}

@Entity({ name: 'carts' })
export class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', default: () => 'uuid_generate_v4()' })
  userId: string;

  @OneToMany(() => CartItem, (item) => item.cart, { cascade: true })
  @JoinColumn({ name: 'id', referencedColumnName: 'cart_id'})
  items: CartItem[];

  @Column({ type: 'date', default: () => 'now()' })
  createdAt: Date;

  @Column({ type: 'date', default: () => 'now()' })
  updatedAt: Date;

  @Column({ type: 'enum', enum: CartStatus, default: CartStatus.OPEN })
  status: CartStatus;
}
