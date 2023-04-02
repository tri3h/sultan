export enum ColorTypes {
    DARK = "DARK",
    LIGHT = "LIGHT",
}

export type Color = ColorTypes.DARK | ColorTypes.LIGHT;

export enum ProductSizeTypes {
    WEIGHT = "вес",
    VOLUME = "объем",
}

export type ProductSize = ProductSizeTypes.WEIGHT | ProductSizeTypes.VOLUME;

export interface Product {
    pic: string;
    name: string;
    type: string;
    size: string;
    barcode: string;
    producer: string;
    brand: string;
    description: string;
    price: string;
    care_type: string;
}

export enum LOCAL_STORAGE_DATA {
    CARE_TYPES = "care_types",
    PRODUCTS = "products",
}
