"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCartTotal = (products) => {
    const totalPrice = products.reduce((total, item) => {
        return total + item.price;
    }, 0);
    return totalPrice;
};
const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
//# sourceMappingURL=calculateCartTotal.js.map