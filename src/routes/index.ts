import React from "react";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductPage from "../pages/product/ProductPage";
import CartPage from "../pages/cart/CartPage";
import AdminPage from "../pages/admin/AdminPage";

export interface IRoute {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    CATALOG = "/",
    PRODUCT = "/product/:barcode",
    CART = "/cart",
    ADMIN = "/admin",
}

export const routes: IRoute[] = [
    { path: RouteNames.CATALOG, element: CatalogPage },
    { path: RouteNames.PRODUCT, element: ProductPage },
    { path: RouteNames.CART, element: CartPage },
    { path: RouteNames.ADMIN, element: AdminPage },
];
