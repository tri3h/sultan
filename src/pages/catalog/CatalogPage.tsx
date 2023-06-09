import { FC, useEffect } from "react";
import classes from "./CatalogPage.module.sass";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProductList from "../../components/productList/ProductList";
import Sorting from "../../components/sorting/Sorting";
import FilterProducer from "../../components/filterProducer/filterProducer";
import FilterPrice from "../../components/filterPrice/filterPrice";
import FilterType from "../../components/filterType/filterType";
import ShadowBlock from "../../components/shadowBlock/ShadowBlock";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Product } from "../../types/types";
import { RouteNames } from "../../routes";

const CatalogPage: FC = () => {
    const { care_types, products } = useTypedSelector((state) => state.product);
    const {
        producer_search,
        producer_checkboxes,
        care_type_checkboxes,
        price_start,
        price_end,
    } = useTypedSelector((state) => state.filter);
    const { setFilteredProducts, setProductPage } = useActions();
    const filterByPrice = (products: Product[]): Product[] => {
        return products.filter((product) => {
            let price = Number(product.price);
            return price >= price_start && price <= price_end;
        });
    };
    const filterByProducer = (products: Product[]): Product[] => {
        let filtered = [...products];
        if (producer_checkboxes.length > 0) {
            filtered = filtered.filter((product: Product) =>
                producer_checkboxes.includes(product.producer)
            );
        }
        if (producer_search.length > 0) {
            filtered = filtered.filter((product: Product) =>
                product.producer
                    .toLowerCase()
                    .includes(producer_search.toLowerCase())
            );
        }
        return filtered;
    };
    const filterByCareType = (products: Product[]): Product[] => {
        if (care_type_checkboxes.length > 0) {
            return products.filter((product: Product) => {
                let care = product.care_type.split(", ");
                return care_type_checkboxes.some((checkbox) =>
                    care.includes(checkbox)
                );
            });
        }
        return products;
    };
    const filter = () => {
        let filtered = [...products];
        filtered = filterByPrice(filtered);
        filtered = filterByProducer(filtered);
        filtered = filterByCareType(filtered);
        setFilteredProducts(filtered);
        setProductPage(1);
    };
    useEffect(() => {
        filter();
    }, [
        producer_search,
        producer_checkboxes,
        care_type_checkboxes,
        price_start,
        price_end,
    ]);
    const breadcrumbs = [
        { name: "Главная", url: RouteNames.CATALOG },
        { name: "Косметика и гигиена", url: RouteNames.CATALOG },
    ];
    const shadowBlocks = care_types.map((type, index) => (
        <li key={index}>
            <ShadowBlock name={type} />
        </li>
    ));
    return (
        <>
            <Header />
            <main className={classes.main} data-testid="catalog-page-main">
                <Breadcrumbs links={breadcrumbs} />
                <div className={classes.top}>
                    <h1 className={classes.title}>Косметика и гигиена</h1>
                    <Sorting />
                </div>
                <ul className={classes["shadow-list"]}>{shadowBlocks}</ul>
                <div className={classes.content}>
                    <div className={classes.filters}>
                        <h2 className={classes.subtitle}>
                            ПОДБОР ПО ПАРАМЕТРАМ
                        </h2>
                        <FilterPrice />
                        <FilterProducer />
                        <FilterType />
                    </div>
                    <div className={classes.data}>
                        <ProductList />
                        <div className={classes.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam interdum ut justo, vestibulum sagittis
                            iaculis iaculis. Quis mattis vulputate feugiat massa
                            vestibulum duis. Faucibus consectetur aliquet sed
                            pellentesque consequat consectetur congue mauris
                            venenatis. Nunc elit, dignissim sed nulla
                            ullamcorper enim, malesuada.
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default CatalogPage;
