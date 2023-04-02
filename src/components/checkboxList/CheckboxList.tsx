import { FC, useState } from "react";
import classes from "./CheckboxList.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CheckboxListProps {
    items: string[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxList: FC<CheckboxListProps> = ({ items, onChange }) => {
    const { care_type_checkboxes } = useTypedSelector((state) => state.filter);
    const lis = items.map((item, index) => {
        let isChecked = care_type_checkboxes.includes(item) ? true : false;
        return (
            <li key={item} className={classes.item}>
                <label className={classes.label}>
                    <input
                        type="checkbox"
                        className={classes.input}
                        name={item}
                        checked={isChecked}
                        onChange={onChange && ((event) => onChange(event))}
                    />
                    {item}
                </label>
            </li>
        );
    });
    return <ul>{lis}</ul>;
};

export default CheckboxList;
