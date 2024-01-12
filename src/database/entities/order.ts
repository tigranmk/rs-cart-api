import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CartStatus } from './carts';
import { CartItem } from './cartItem';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column('uuid')
  cartId: string;

  @OneToMany(() => CartItem, (item) => item.cart)
  @JoinColumn({ name: 'cart_id' })
  items: CartItem[];

  @Column({ type: 'jsonb' })
  payment: {
    type: string,
    address?: any,
    creditCard?: any,
  };

  @Column({ type: 'jsonb' })
  delivery: {
    type: string,
    address: any,
  };

  @Column({ type: 'text' })
  comments: string;

  @Column({ type: 'enum', enum: CartStatus, default: CartStatus.OPEN })
  status: CartStatus;

  @Column({ type: 'integer' })
  total: number;
}
