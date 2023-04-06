import { FC } from "react";
import classes from "./Pagination.module.sass";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

import arrowLeft from "../../assets/img/svg/arrow-left.svg";
import arrowRight from "../../assets/img/svg/arrow-right.svg";

const Pagination: FC = () => {
    const { filtered_products, page, limit } = useTypedSelector(
        (state) => state.filter
    );
    const { setProductPage } = useActions();
    const totalPages = Math.ceil(filtered_products.length / limit);
    let lis = [];
    for (let i = 1; i <= totalPages; i++) {
        lis.push(
            <li
                key={i}
                className={[
                    classes.item,
                    i === page ? classes["item_picked"] : null,
                ].join(" ")}
                onClick={() => setProductPage(i)}
            >
                <span className={classes.count}>{i}</span>
            </li>
        );
    }

    return (
        <div className={classes.container}>
            <img
                src={arrowLeft}
                className={classes.arrow}
                onClick={() => setProductPage(page - 1 < 1 ? page : page - 1)}
            />
            <ul className={classes.list}>{lis}</ul>
            <img
                src={arrowRight}
                className={classes.arrow}
                onClick={() =>
                    setProductPage(page + 1 > totalPages ? page : page + 1)
                }
            />
        </div>
    );
};

export default Pagination;
