import { FC, useEffect } from "react";
import classes from "./ProductList.module.css";
import ProductCard from "../productCard/ProductCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Pagination from "../pagination/Pagination";
import { getImageByName, getProductSizeType } from "../../utils/utils";

const ProductList: FC = () => {
    let { filtered_products, page, limit } = useTypedSelector(
        (state) => state.filter
    );
    filtered_products = filtered_products.filter(
        (_, index) => index < page * limit && index >= page * limit - limit
    );
    const lis = filtered_products.map((product) => {
        return (
            <li key={product.barcode}>
                <ProductCard product={product} />
            </li>
        );
    });
    const noProducts = (
        <div className={classes["no-products"]}>Нет таких товаров</div>
    );
    return (
        <div className={classes.container}>
            {lis.length === 0 ? (
                noProducts
            ) : (
                <div className={classes.container}>
                    <ul className={classes.list}>{lis}</ul>
                    <Pagination />
                </div>
            )}
        </div>
    );
};

export default ProductList;
