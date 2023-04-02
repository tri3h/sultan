import { CartAction, CartActionEnum, CartItem } from "./types";

export const CartActionCreators = {
    setCartItem: (items: CartItem[]): CartAction => ({
        type: CartActionEnum.SET_CART_ITEM,
        payload: items,
    }),
};
