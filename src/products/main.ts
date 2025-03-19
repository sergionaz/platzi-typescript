import { addProduct, calcStock, products } from "./product.service";

addProduct({
    title: 'Pro1', 
    createdAt: new Date(1993, 1, 1), 
    stock: 12
});

addProduct({
    title: 'Pro2', 
    createdAt: new Date(1990, 1, 1), 
    stock: 13, 
    size: 'L'
});

console.log(products);

const total = calcStock()
console.log( 'Total:' + total);

