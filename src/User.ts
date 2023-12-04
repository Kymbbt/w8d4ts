import { v4 as uuidv4 } from 'uuid';
import { Item } from './Items';
class User {
  id: string;
  name: string;
  cart: Item[] = [];

  constructor(name: string) {
    this.id = uuidv4();
    this.name = name;
  }

  addToCart(item: Item): void {
    this.cart.push(item);
  }

  printCart(): void {
    console.log(`${this.name}'s Cart:`);
    this.cart.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - $${item.price}`);
    });
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem !== item);
  }

  removeQuantityFromCart(item: Item, quantity: number): void {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart[index].quantity -= quantity;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
    }
  }
}

export { User };
