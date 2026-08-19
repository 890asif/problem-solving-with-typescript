"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStockStatus = (stock) => {
    if (stock === 0) {
        return "Out of Stock";
    }
    else if (stock >= 5) {
        return "Almost Sold Out";
    }
    else if (stock >= 20) {
        return "Available";
    }
    else {
        return "In Stock";
    }
};
console.log(getStockStatus(0));
//# sourceMappingURL=getStockStatus.js.map