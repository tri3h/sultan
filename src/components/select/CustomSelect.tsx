import { FC } from "react";
import classes from "./CustomSelect.module.css";

interface CustomSelectOptions {
    value: string;
    name: string;
}

interface CustomSelectProps {
    options: CustomSelectOptions[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({ options, onChange }) => {
    return (
        <select
            className={[classes.text, classes.select].join(" ")}
            onChange={onChange && ((event) => onChange(event))}
        >
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    className={classes.text}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default CustomSelect;
