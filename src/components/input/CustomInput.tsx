import { FC } from "react";
import classes from "./CustomInput.module.css";

interface CustomInputProps {
    placeholder: string;
    icon: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({ placeholder, icon, onChange }) => {
    return (
        <label className={classes.label}>
            <img className={classes.icon} src={icon} />
            <input
                className={classes.input}
                placeholder={placeholder}
                onChange={onChange && ((event) => onChange(event))}
            />
        </label>
    );
};

export default CustomInput;
