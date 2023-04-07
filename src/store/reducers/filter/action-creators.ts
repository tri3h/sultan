import { Product } from "../../../types/types";
import { FilterAction, FilterActionEnum } from "./types";

export const FilterActionCreators = {
    setFilteredProducts: (products: Product[]): FilterAction => ({
        type: FilterActionEnum.SET_FILTERED_PRODUCTS,
        payload: products,
    }),
    setSortedProducts: (products: Product[]): FilterAction => ({
        type: FilterActionEnum.SET_SORTED_PRODUCTS,
        payload: products,
    }),
    setProductPage: (page: number): FilterAction => ({
        type: FilterActionEnum.SET_PRODUCT_PAGE,
        payload: page,
    }),
    setProducerSearch: (search: string): FilterAction => ({
        type: FilterActionEnum.SET_PRODUCER_SEARCH,
        payload: search,
    }),
    setProducerCheckboxes: (checkboxes: string[]): FilterAction => ({
        type: FilterActionEnum.SET_PRODUCER_CHECKBOXES,
        payload: checkboxes,
    }),
    setCareTypeCheckboxes: (checkboxes: string[]): FilterAction => ({
        type: FilterActionEnum.SET_CARE_TYPE_CHECKBOXES,
        payload: checkboxes,
    }),
    setPriceStart: (start: number): FilterAction => ({
        type: FilterActionEnum.SET_PRICE_START,
        payload: start,
    }),
    setPriceEnd: (end: number): FilterAction => ({
        type: FilterActionEnum.SET_PRICE_END,
        payload: end,
    }),
};
