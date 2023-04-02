import { Product } from "../../../types/types";
import { ProductAction, ProductActionEnum } from "./types";

export const ProductActionCreators = {
    setProducts: (products: Product[]): ProductAction => ({
        type: ProductActionEnum.SET_PRODUCTS,
        payload: products,
    }),
};
