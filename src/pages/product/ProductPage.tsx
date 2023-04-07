import { FC, useState } from "react";
import classes from "./ProductPage.module.sass";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getImageByName, getProductSizeType } from "../../utils/utils";
import Size from "../../components/size/Size";
import CustomButton from "../../components/button/CustomButton";
import Counter from "../../components/counter/Counter";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Features from "../../components/features/Features";
import cartIcon from "../../assets/img/svg/cart-small.svg";
import shareIcon from "../../assets/img/svg/share.svg";
import downloadIcon from "../../assets/img/svg/download-black.svg";
import arrowIcon from "../../assets/img/svg/sorting-arrow-up.svg";
import { Product } from "../../types/types";
import { RouteNames } from "../../routes";

const ProductPage: FC = () => {
    const params = useParams();
    const barcode = params.barcode || "";
    const navigate = useNavigate();
    const { products } = useTypedSelector((state) => state.product);
    const product: Product | undefined = products.find(
        (product) => product.barcode === barcode
    );
    const [isDescrShown, setIsDescrShown] = useState(true);
    const [isCharactShown, setIsCharactShown] = useState(true);
    let content = (
        <div className={classes["no-product"]}>Нет такого товара</div>
    );
    if (typeof product !== "undefined") {
        const image = getImageByName(product.pic);
        const featuresShort = [
            { name: "Производитель: ", value: product.producer },
            { name: "Бренд: ", value: product.brand },
            { name: "Артикул: ", value: "460404" },
            { name: "Штрихкод: ", value: product.barcode },
        ];
        const featuresFull = [
            { name: "Назначение: ", value: "BioMio" },
            { name: "Тип: ", value: product.care_type },
            { name: "Производитель: ", value: product.producer },
            { name: "Бренд: ", value: product.brand },
            { name: "Артикул: ", value: "460404" },
            { name: "Штрихкод: ", value: product.barcode },
            { name: "Вес: ", value: product.size },
            { name: "Объем: ", value: product.size },
            { name: "Кол-во в коробке: ", value: product.size },
        ];
        const breadcrumbs = [
            { name: "Главная", url: RouteNames.CATALOG },
            { name: "Каталог", url: RouteNames.CATALOG },
            {
                name: product.name,
                url: RouteNames.PRODUCT.split(":")[0] + product.barcode,
            },
        ];
        content = (
            <main className={classes.main}>
                <Breadcrumbs links={breadcrumbs} />
                <div className={classes["product-container"]}>
                    <img
                        src={image}
                        className={classes.img}
                        alt={product.name}
                    />
                    <div className={classes.info}>
                        <p className={classes["info-text"]}>В наличии</p>
                        <h1 className={classes.title}>{product.name}</h1>
                        <div className={classes.size}>
                            <Size
                                type={getProductSizeType(product.type)}
                                size={product.size}
                            />
                        </div>
                        <div className={classes["buying-container"]}>
                            <p
                                className={classes.price}
                            >{`${product.price} ₸`}</p>
                            <Counter product={product} />
                            <CustomButton
                                text={"В корзину"}
                                icon={{ src: cartIcon, alt: "cart" }}
                                isSmall={false}
                                onClick={() => {
                                    navigate(RouteNames.CART);
                                }}
                            />
                        </div>
                        <ul className={classes["share-list"]}>
                            <li className={classes["share-item"]}>
                                <img src={shareIcon} alt="share" />
                            </li>
                            <li className={classes["share-item"]}>
                                <p className={classes["share-text"]}>
                                    При покупке от{" "}
                                    <span
                                        className={classes["share-text_bold"]}
                                    >
                                        10 000 ₸
                                    </span>{" "}
                                    бесплатная доставка <br /> по Кокчетаву и
                                    области
                                </p>
                            </li>
                            <li className={classes["share-item"]}>
                                <p
                                    className={[
                                        classes["share-text_bold"],
                                        classes["share-text"],
                                    ].join(" ")}
                                >
                                    Прайс-лист
                                </p>
                                <img src={downloadIcon} alt="download" />
                            </li>
                        </ul>
                        <div className={classes.features}>
                            <Features features={featuresShort} />
                        </div>
                        <div
                            className={classes["subtitle-container"]}
                            onClick={() => {
                                setIsDescrShown(!isDescrShown);
                            }}
                        >
                            <h3 className={classes.subtitle}>Описание</h3>
                            <img
                                className={
                                    isDescrShown
                                        ? classes.arrow
                                        : [
                                              classes.arrow,
                                              classes["arrow_down"],
                                          ].join(" ")
                                }
                                src={arrowIcon}
                                alt="arrow"
                            />
                        </div>
                        {isDescrShown ? (
                            <p className={classes.description}>
                                {product.description}
                            </p>
                        ) : null}
                        <div className={classes.delimiter}></div>
                        <div
                            className={classes["subtitle-container"]}
                            onClick={() => {
                                setIsCharactShown(!isCharactShown);
                            }}
                        >
                            <h3 className={classes.subtitle}>Характеристики</h3>
                            <img
                                className={
                                    isCharactShown
                                        ? classes.arrow
                                        : [
                                              classes.arrow,
                                              classes["arrow_down"],
                                          ].join(" ")
                                }
                                src={arrowIcon}
                                alt="arrow"
                            />
                        </div>
                        {isCharactShown ? (
                            <Features features={featuresFull} />
                        ) : null}
                    </div>
                </div>
            </main>
        );
    }

    return (
        <>
            <Header />
            {content} <Footer />
        </>
    );
};

export default ProductPage;
