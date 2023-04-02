import { Product } from "../../../types/types";

export interface CartItem {
    product: Product;
    count: number;
}

export interface CartState {
    items: CartItem[];
}

export enum CartActionEnum {
    SET_CART_ITEM = "SET_CART_ITEM",
}

interface SetCartItemAction {
    type: CartActionEnum.SET_CART_ITEM;
    payload: CartItem[];
}

export type CartAction = SetCartItemAction;
