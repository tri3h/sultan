import { Product } from "../../../types/types";

export interface FilterState {
    filtered_products: Product[];
    sorted_products: Product[];
    producer_search: string;
    producer_checkboxes: string[];
    care_type_checkboxes: string[];
    price_start: number;
    price_end: number;
    page: number;
    limit: number;
}

export enum FilterActionEnum {
    SET_FILTERED_PRODUCTS = "SET_FILTERED_PRODUCTS",
    SET_SORTED_PRODUCTS = "SET_SORTED_PRODUCTS",
    SET_PRODUCT_PAGE = "SET_PRODUCT_PAGE",
    SET_PRODUCER_SEARCH = "SET_PRODUCER_SEARCH",
    SET_PRODUCER_CHECKBOXES = "SET_PRODUCER_CHECKBOXES",
    SET_CARE_TYPE_CHECKBOXES = "SET_CARE_TYPE_CHECKBOXES",
    SET_PRICE_START = "SET_PRICE_START",
    SET_PRICE_END = "SET_PRICE_END",
}

interface SetPriceEndAction {
    type: FilterActionEnum.SET_PRICE_END;
    payload: number;
}

interface SetPriceStartAction {
    type: FilterActionEnum.SET_PRICE_START;
    payload: number;
}

interface SetCareTypeCheckboxesAction {
    type: FilterActionEnum.SET_CARE_TYPE_CHECKBOXES;
    payload: string[];
}

interface SetProducerCheckboxesAction {
    type: FilterActionEnum.SET_PRODUCER_CHECKBOXES;
    payload: string[];
}

interface SetProducerSearchAction {
    type: FilterActionEnum.SET_PRODUCER_SEARCH;
    payload: string;
}

interface SetSortedProductsAction {
    type: FilterActionEnum.SET_SORTED_PRODUCTS;
    payload: Product[];
}

interface SetFilteredProductsAction {
    type: FilterActionEnum.SET_FILTERED_PRODUCTS;
    payload: Product[];
}

interface SetProductPageAction {
    type: FilterActionEnum.SET_PRODUCT_PAGE;
    payload: number;
}

export type FilterAction =
    | SetProductPageAction
    | SetFilteredProductsAction
    | SetSortedProductsAction
    | SetProducerCheckboxesAction
    | SetProducerSearchAction
    | SetCareTypeCheckboxesAction
    | SetPriceStartAction
    | SetPriceEndAction;
