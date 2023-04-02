import data from "../../../assets/data.json";
import { LOCAL_STORAGE_DATA } from "../../../types/types";
import { ProductAction, ProductActionEnum, ProductState } from "./types";

const getInitialState = (): ProductState => {
    const types = [
        "Уход за телом",
        "Уход за руками",
        "Уход за ногами",
        "Уход за лицом",
        "Уход за волосами",
    ];
    let initialState = {
        products: data,
        care_types: types,
    };
    const localProducts = localStorage.getItem(LOCAL_STORAGE_DATA.PRODUCTS);
    const localCareTypes = localStorage.getItem(LOCAL_STORAGE_DATA.CARE_TYPES);
    if (localProducts && localCareTypes) {
        initialState.products = JSON.parse(localProducts);
        initialState.care_types = JSON.parse(localCareTypes);
    } else {
        localStorage.setItem(LOCAL_STORAGE_DATA.PRODUCTS, JSON.stringify(data));
        localStorage.setItem(
            LOCAL_STORAGE_DATA.CARE_TYPES,
            JSON.stringify(types)
        );
    }
    return initialState;
};

export default function productReducer(
    state = getInitialState(),
    action: ProductAction
): ProductState {
    switch (action.type) {
        case ProductActionEnum.SET_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}
