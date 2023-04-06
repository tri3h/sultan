import { FC, useEffect, useState } from "react";
import classes from "./Counter.module.sass";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { addToCart } from "../../utils/utils";
import { Product } from "../../types/types";

interface CounterProps {
    product: Product;
}

const Counter: FC<CounterProps> = ({ product }) => {
    const { items } = useTypedSelector((state) => state.cart);
    const { setCartItem } = useActions();
    const [count, setCount] = useState(
        items.find((item) => item.product.barcode === product.barcode)?.count ||
            0
    );
    useEffect(() => {
        const newCount = items.find(
            (item) => item.product.barcode === product.barcode
        )?.count;
        if (newCount) {
            setCount(newCount);
        }
    }, items);
    const addItem = () => {
        setCartItem(addToCart(product, items, 1));
    };
    const removeItem = () => {
        if (count > 1) {
            setCartItem(addToCart(product, items, -1));
        }
    };
    return (
        <div className={classes.container}>
            <button className={classes.button} onClick={removeItem}>
                -
            </button>
            <span className={classes.count}>{count}</span>
            <button className={classes.button} onClick={addItem}>
                +
            </button>
        </div>
    );
};

export default Counter;
