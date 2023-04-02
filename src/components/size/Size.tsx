import { FC } from "react";
import classes from "./Size.module.css";

import { ProductSize, ProductSizeTypes } from "../../types/types";

import bottleIcon from "../../assets/img/svg/bottle.svg";
import boxIcon from "../../assets/img/svg/box.svg";

export interface SizeProps {
    type: ProductSize;
    size: string;
}

const Size: FC<SizeProps> = ({ type, size }) => {
    const volume = <img src={bottleIcon} />;
    const weight = <img src={boxIcon} />;
    const icon = type === ProductSizeTypes.VOLUME ? volume : weight;

    return (
        <div className={classes.container}>
            {icon}
            <p className={classes.text}>{size}</p>
        </div>
    );
};

export default Size;
