import { FC } from "react";
import classes from "./ProductList.module.sass";
import ProductCard from "../productCard/ProductCard";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Pagination from "../pagination/Pagination";

const ProductList: FC = () => {
    let { sorted_products, page, limit } = useTypedSelector(
        (state) => state.filter
    );
    const productsForPage = sorted_products.filter(
        (_, index) => index < page * limit && index >= page * limit - limit
    );
    const lis = productsForPage.map((product) => {
        return (
            <li key={product.barcode}>
                <ProductCard product={product} />
            </li>
        );
    });
    return (
        <div className={classes.container}>
            {lis.length === 0 ? (
                <div className={classes["no-products"]}>Нет таких товаров</div>
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
