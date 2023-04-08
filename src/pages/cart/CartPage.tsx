import { FC, useState } from "react";
import classes from "./CartPage.module.sass";
import CartList from "../../components/cartList/CartList";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CustomButton from "../../components/button/CustomButton";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ThanksModal from "../../components/thanksModal/ThanksModal";
import { useActions } from "../../hooks/useActions";
import { RouteNames } from "../../routes";

const CartPage: FC = () => {
    const { items } = useTypedSelector((state) => state.cart);
    const [isBought, setIsBought] = useState(false);
    const { setCartItem } = useActions();
    const totalPrice = items.reduce(
        (prev, item) => Number(item.count) * Number(item.product.price) + prev,
        0
    );
    const onBuyClick = () => {
        setCartItem([]);
        window.scrollTo(0, 0);
        setIsBought(true);
        document.body.style.overflow = "hidden";
    };
    const closeModal = () => {
        setIsBought(false);
        document.body.style.overflow = "";
    };
    const breadcrumbs = [
        { name: "Главная", url: RouteNames.CATALOG },
        { name: "Корзина", url: RouteNames.CART },
    ];
    const noItems = (
        <div className={classes["no-items"]}>В корзине нет товаров</div>
    );
    const itemsList = (
        <div className={classes.cart}>
            <CartList />
            <div className={classes.final}>
                <CustomButton text={"Оформить заказ"} onClick={onBuyClick} />
                <p className={classes.price}>{`${totalPrice} ₸`}</p>
            </div>
        </div>
    );
    return (
        <>
            <Header />
            <main data-testid="cart-page-main" className={classes.main}>
                <Breadcrumbs links={breadcrumbs} />
                <h1 className={classes.title}>Корзина</h1>
                {items.length === 0 ? noItems : itemsList}
                {isBought ? <ThanksModal close={closeModal} /> : null}
            </main>
            <Footer />
        </>
    );
};

export default CartPage;
