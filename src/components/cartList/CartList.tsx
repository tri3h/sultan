import { FC } from "react";
import classes from "./CartList.module.sass";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CartCard from "../cartCard/CartCard";

const CartList: FC = () => {
    const { items } = useTypedSelector((state) => state.cart);
    const sortedItems = [...items].sort((a, b) =>
        a.product.name.localeCompare(b.product.name)
    );
    const lis = sortedItems.map((item, index) => {
        return (
            <li
                key={item.product.barcode}
                className={
                    index === items.length - 1
                        ? [classes.item, classes["item_last"]].join(" ")
                        : classes.item
                }
            >
                {<CartCard item={item} />}
            </li>
        );
    });
    return <ul className={classes.list}>{lis}</ul>;
};

export default CartList;
