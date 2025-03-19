// Me traigo Sizer y Product del archivo donde los modelé
import { Sizes, Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: Product) => {
    products.push(data);
}

export const calcStock = (): number => {
    let total = 0;
    products.forEach((item) => {
        total += item.stock;
    })
    return total;
}