import { FC, useState } from "react";
import classes from "./CheckboxListExpandable.module.css";

export interface CheckboxItem {
    name: string;
    count: number;
}

interface CheckboxListExpandableProps {
    items: CheckboxItem[];
    maxVisible: number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxListExpandable: FC<CheckboxListExpandableProps> = ({
    items,
    maxVisible,
    onChange,
}) => {
    const [isShowAll, setIsShowAll] = useState(false);
    const lis = items.map((item, index) => (
        <li key={item.name} className={classes.item}>
            <label className={classes.label}>
                <input
                    type="checkbox"
                    className={classes.input}
                    name={item.name}
                    onChange={onChange && ((event) => onChange(event))}
                />
                {item.name}
                <span className={classes.count}>{` (${item.count})`}</span>
            </label>
        </li>
    ));
    const showAll = (): void => {
        setIsShowAll(true);
    };
    const shortList = lis.slice(0, maxVisible);
    return (
        <div className={classes.container}>
            <ul>{isShowAll ? lis : shortList}</ul>
            {isShowAll ? null : (
                <span className={classes.show} onClick={showAll}>
                    Показать все
                </span>
            )}
        </div>
    );
};

export default CheckboxListExpandable;
