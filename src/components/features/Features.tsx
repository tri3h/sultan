import { FC } from "react";
import classes from "./Features.module.sass";

interface feature {
    name: string;
    value: string;
}

export interface FeaturesProps {
    features: feature[];
}

const Features: FC<FeaturesProps> = ({ features }) => {
    const lis = features.map((item, index) => (
        <li key={index} className={classes.item}>
            <span className={classes.name}>{item.name}</span>
            <span className={classes.value}>{item.value}</span>
        </li>
    ));

    return <ul className={classes.list}>{lis}</ul>;
};

export default Features;
