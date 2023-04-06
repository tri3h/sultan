import { FC } from "react";
import classes from "./ProductCard.module.sass";
import CustomButton from "../button/CustomButton";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/img/svg/cart-small.svg";
import Size from "../size/Size";
import Features from "../features/Features";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Product } from "../../types/types";
import {
    addToCart,
    getImageByName,
    getProductSizeType,
} from "../../utils/utils";


interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { setCartItem } = useActions();
    const { items } = useTypedSelector((state) => state.cart);
    const onCartClick = () => {
        setCartItem(addToCart(product, items, 1));
    };
    const type = getProductSizeType(product.type);
    const features = [
        { name: "Штрихкод: ", value: product.barcode },
        { name: "Производитель: ", value: product.producer },
        { name: "Бренд: ", value: product.brand },
        { name: "Тип ухода: ", value: product.care_type },
    ];
    const image = getImageByName(product.pic);
    return (
        <div className={classes.container}>
            <img className={classes.img} src={image} />
            <div className={classes.size}>
                <Size {...{ type: type, size: product.size }} />
            </div>
            <Link className={classes.name} to={`/product/${product.barcode}`}>
                {product.name}
            </Link>
            <div className={classes.description}>
                <Features {...{ features }} />
            </div>
            <div className={classes.buying}>
                <p className={classes.price}>{`${product.price} ₸`}</p>
                <CustomButton
                    text={"В корзину"}
                    icon={cartIcon}
                    isSmall={true}
                    onClick={onCartClick}
                />
            </div>
        </div>
    );
};

export default ProductCard;
