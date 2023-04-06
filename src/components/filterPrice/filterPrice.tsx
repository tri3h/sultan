import { FC } from "react";
import classes from "./filterPrice.module.sass";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const FilterPrice: FC = () => {
    const { setPriceStart, setPriceEnd } = useActions();
    const { price_start, price_end } = useTypedSelector(
        (state) => state.filter
    );
    const onMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceStart(Number(event.target.value));
    };
    const onMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPriceEnd(Number(event.target.value));
    };
    return (
        <div className={classes.container}>
            <p className={classes.title}>
                Цена <span className={classes.symbol}>₸</span>
            </p>
            <div className={classes.inputs}>
                <input
                    type="number"
                    className={classes.input}
                    defaultValue={price_start}
                    onChange={onMinChange}
                />
                <span className={classes.symbol}>-</span>
                <input
                    type="number"
                    className={classes.input}
                    defaultValue={price_end}
                    onChange={onMaxChange}
                />
            </div>
        </div>
    );
};

export default FilterPrice;
