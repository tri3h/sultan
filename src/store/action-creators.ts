import { CartActionCreators } from "./reducers/cart/action-creators";
import { FilterActionCreators } from "./reducers/filter/action-creators";
import { ProductActionCreators } from "./reducers/product/action-creators";

export const allActionCreators = {
    ...ProductActionCreators,
    ...CartActionCreators,
    ...FilterActionCreators,
};
