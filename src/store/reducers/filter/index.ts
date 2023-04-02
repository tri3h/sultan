import { LOCAL_STORAGE_DATA } from "../../../types/types";
import { FilterAction, FilterActionEnum, FilterState } from "./types";

const getInitialState = (): FilterState => {
    let initialState = {
        filtered_products: [],
        producer_search: "",
        producer_checkboxes: [],
        care_type_checkboxes: [],
        price_start: 0,
        price_end: 10000,
        page: 1,
        limit: 15,
    };
    const localProducts = localStorage.getItem(LOCAL_STORAGE_DATA.PRODUCTS);
    if (localProducts) {
        initialState.filtered_products = JSON.parse(localProducts);
    }
    return initialState;
};

export default function filterReducer(
    state = getInitialState(),
    action: FilterAction
): FilterState {
    switch (action.type) {
        case FilterActionEnum.SET_FILTERED_PRODUCTS:
            return { ...state, filtered_products: action.payload };
        case FilterActionEnum.SET_PRODUCT_PAGE:
            return { ...state, page: action.payload };
        case FilterActionEnum.SET_PRODUCER_SEARCH:
            return { ...state, producer_search: action.payload };
        case FilterActionEnum.SET_PRODUCER_CHECKBOXES:
            return { ...state, producer_checkboxes: action.payload };
        case FilterActionEnum.SET_CARE_TYPE_CHECKBOXES:
            return { ...state, care_type_checkboxes: action.payload };
        case FilterActionEnum.SET_PRICE_START:
            return { ...state, price_start: action.payload };
        case FilterActionEnum.SET_PRICE_END:
            return { ...state, price_end: action.payload };
        default:
            return state;
    }
}
