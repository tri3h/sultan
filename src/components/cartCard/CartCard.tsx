import { FC } from "react";
import classes from "./CartCard.module.sass";
import Size from "../size/Size";
import Counter from "../counter/Counter";
import { CartItem } from "../../store/reducers/cart/types";
import { getImageByName, getProductSizeType } from "../../utils/utils";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import deleteIcon from "../../assets/img/svg/delete.svg";
import { RouteNames } from "../../routes";

interface CartCardProps {
    item: CartItem;
}

const CartCard: FC<CartCardProps> = ({ item }) => {
    const { items } = useTypedSelector((state) => state.cart);
    const { setCartItem } = useActions();
    const { product, count } = item;
    const img = getImageByName(product.pic);
    const type = getProductSizeType(product.size);
    const totalPrice = Number(product.price) * count;
    return (
        <div className={classes.container}>
            <div className={classes["img-container"]}>
                <img
                    className={classes.img}
                    src={img}
                    alt={item.product.name}
                />
            </div>
            <div className={classes.info}>
                <Size {...{ type: type, size: product.size }} />
                <Link
                    className={classes.name}
                    to={RouteNames.PRODUCT.split(":")[0] + product.barcode}
                >
                    {product.name}
                </Link>
                <p className={classes.description}>{product.description}</p>
            </div>
            <div className={classes["button-container"]}>
                <div
                    className={[
                        classes.delimiter,
                        classes["delimiter_left"],
                    ].join(" ")}
                ></div>
                <Counter product={product} />
                <div className={classes.delimiter}></div>
                <p className={classes.price}>{`${totalPrice} ₸`}</p>
                <div className={classes.delimiter}></div>
                <button
                    className={classes.button}
                    onClick={() => {
                        setCartItem(
                            items.filter(
                                (i) =>
                                    item.product.barcode !== i.product.barcode
                            )
                        );
                    }}
                >
                    <img src={deleteIcon} alt="delete" />
                </button>
            </div>
        </div>
    );
};

export default CartCard;
