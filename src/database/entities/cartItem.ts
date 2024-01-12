import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Cart } from './carts';
import { Product } from './product';

@Entity({ name: 'cart_items' })
export class CartItem {
  @PrimaryColumn('uuid')
  cartId: string;

  @PrimaryColumn('uuid')
  productId: string;

  @ManyToOne(
    () => Cart,
    cart => cart.items,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'cart_id', referencedColumnName: 'id' })
  cart: Cart;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: Product;

  @Column({ type: 'integer', default: 1 })
  count: number;
}