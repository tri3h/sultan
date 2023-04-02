import { FC, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import cartIcon from "../../assets/img/svg/cart.svg";
import { redirect, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useViewport } from "../../hooks/useViewport";

const Cart: FC = () => {
    const navigate = useNavigate();
    const toCartPage = () => {
        navigate("/cart");
    };
    const { width } = useViewport();
    const breakpoint = 992;
    const { items } = useTypedSelector((state) => state.cart);
    const getTotalCount = () => {
        return items.reduce((prev, item) => item.count + prev, 0);
    };
    const getTotalPrice = () => {
        return items.reduce(
            (prev, item) => Number(item.product.price) * item.count + prev,
            0
        );
    };
    const [count, setCount] = useState(getTotalCount());
    const [price, setPrice] = useState(getTotalPrice());
    useEffect(() => {
        setCount(getTotalCount());
        setPrice(getTotalPrice());
    }, [items]);
    return (
        <div className={classes.container} onClick={toCartPage}>
            <div className={classes["pic-container"]}>
                <span className={classes["pic-counter"]}>{count}</span>
                <img src={cartIcon} />
            </div>
            {width > breakpoint ? (
                <div className={classes["text-container"]}>
                    <span className={classes.text}>Корзина</span>
                    <span className={classes.price}>{`${price} ₸`}</span>
                </div>
            ) : null}
        </div>
    );
};

export default Cart;
