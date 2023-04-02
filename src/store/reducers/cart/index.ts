import { CartAction, CartActionEnum, CartState } from "./types";

const initialState: CartState = {
    items: [],
};

export default function cartReducer(
    state = initialState,
    action: CartAction
): CartState {
    switch (action.type) {
        case CartActionEnum.SET_CART_ITEM:
            return { ...state, items: action.payload };
        default:
            return state;
    }
}
