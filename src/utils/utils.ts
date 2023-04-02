import { CartItem } from "../store/reducers/cart/types";
import {
    LOCAL_STORAGE_DATA,
    Product,
    ProductSize,
    ProductSizeTypes,
} from "../types/types";

export const getImageByName = (name: string): string => {
    const images = require.context("../assets/img/data", true);
    return images(`./${name}`);
};

export const getProductSizeType = (type: string): ProductSize => {
    return ProductSizeTypes.VOLUME === type.toLowerCase()
        ? ProductSizeTypes.VOLUME
        : ProductSizeTypes.WEIGHT;
};

export const addToCart = (
    product: Product,
    items: CartItem[],
    number: number
): CartItem[] => {
    const result = items.find(
        (item) => item.product.barcode === product.barcode
    );
    const newItems = [...items].filter(
        (item) => item.product.barcode !== product.barcode
    );
    let item = { product, count: number };
    if (result) {
        item = { product, count: result.count + number };
    }
    return [...newItems, item];
};

export const getProductsFromStorage = (): Product[] => {
    const products = localStorage.getItem(LOCAL_STORAGE_DATA.PRODUCTS);
    let result = [];
    if (products) {
        result = JSON.parse(products);
    }
    return result;
};

export const getTypesFromStorage = (): string[] => {
    const careTypes = localStorage.getItem(LOCAL_STORAGE_DATA.CARE_TYPES);
    let result = [];
    if (careTypes) {
        result = JSON.parse(careTypes);
    }
    return result;
};
