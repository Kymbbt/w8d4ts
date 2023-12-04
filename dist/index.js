"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Items_1 = require("./Items");
const shop = {
    items: [
        new Items_1.Item('Apple', 55),
        new Items_1.Item('Banana', 66),
        new Items_1.Item('Grapes', 77),
    ],
};
// Create a User
const user = new User_1.User('Kym Bbt');
// Add items to the user's cart
user.addToCart(shop.items[0]);
user.addToCart(shop.items[1]);
// Print the user's cart
user.printCart();
// Remove all of a singular item from the cart
user.removeFromCart(shop.items[0]);
user.printCart();
// Remove a quantity from the cart
user.addToCart(shop.items[0]);
user.addToCart(shop.items[0]);
user.printCart();
user.removeQuantityFromCart(shop.items[0], 1);
user.printCart();
