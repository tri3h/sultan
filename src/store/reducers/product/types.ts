import { Product } from "../../../types/types";

export interface ProductState {
    products: Product[];
    care_types: string[];
}

export enum ProductActionEnum {
    SET_PRODUCTS = "SET_PRODUCTS",
}

interface SortProductsAction {
    type: ProductActionEnum.SET_PRODUCTS;
    payload: Product[];
}

export type ProductAction = SortProductsAction;
