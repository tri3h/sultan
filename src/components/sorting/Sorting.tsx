import { FC, useEffect, useState } from "react";
import classes from "./Sorting.module.sass";
import CustomSelect from "../select/CustomSelect";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import { Product } from "../../types/types";

const Sorting: FC = () => {
    const { filtered_products } = useTypedSelector((state) => state.filter);
    const { setSortedProducts, setProductPage } = useActions();
    const options = [
        { name: "По возрастанию названия", value: "name_increase" },
        { name: "По убыванию названия", value: "name_decrease" },
        { name: "По возрастанию цены", value: "price_increase" },
        { name: "По убыванию цены", value: "price_decrease" },
    ];
    const [sortType, setSortType] = useState(options[0].value);
    const sortByName = (
        products: Product[],
        sortResults: number[]
    ): Product[] => {
        const sorted = [...products].sort((a: Product, b: Product) => {
            let result = a["name"].localeCompare(b["name"]);
            if (result === 1) {
                return sortResults[0];
            } else if (result === -1) {
                return sortResults[2];
            }
            return sortResults[1];
        });
        return sorted;
    };
    const sortByPrice = (
        products: Product[],
        sortResults: number[]
    ): Product[] => {
        const sorted = [...products].sort((a: Product, b: Product) => {
            const aPrice = Number(a["price"].split(" ")[0]);
            const bPrice = Number(b["price"].split(" ")[0]);
            if (aPrice > bPrice) {
                return sortResults[0];
            } else if (aPrice < bPrice) {
                return sortResults[2];
            }
            return sortResults[1];
        });
        return sorted;
    };
    const sortProducts = () => {
        const [sortBy, order] = sortType.split("_");
        const sortResults = [1, 0, -1];
        if (order === "decrease") {
            sortResults.reverse();
        }
        let sortedProducts = [...filtered_products];
        switch (sortBy) {
            case "price":
                sortedProducts = sortByPrice(filtered_products, sortResults);
                break;
            case "name":
                sortedProducts = sortByName(filtered_products, sortResults);
                break;
        }
        setSortedProducts(sortedProducts);
        setProductPage(1);
    };
    useEffect(() => {
        sortProducts();
    }, [filtered_products, sortType]);
    return (
        <div className={classes.container}>
            <span className={classes.name}>Сортировка: </span>
            <CustomSelect
                options={options}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setSortType(event.currentTarget.value)
                }
            />
        </div>
    );
};

export default Sorting;
