"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    constructor(name) {
        this.cart = [];
        this.id = (0, uuid_1.v4)();
        this.name = name;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    printCart() {
        console.log(`${this.name}'s Cart:`);
        this.cart.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - $${item.price}`);
        });
    }
    removeFromCart(item) {
        this.cart = this.cart.filter((cartItem) => cartItem !== item);
    }
    removeQuantityFromCart(item, quantity) {
        const index = this.cart.indexOf(item);
        if (index !== -1) {
            this.cart[index].quantity -= quantity;
            if (this.cart[index].quantity <= 0) {
                this.cart.splice(index, 1);
            }
        }
    }
}
exports.User = User;
