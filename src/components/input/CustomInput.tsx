import { FC } from "react";
import classes from "./CustomInput.module.sass";
import { Img } from "../../types/types";

interface CustomInputProps {
    placeholder: string;
    icon: Img;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: FC<CustomInputProps> = ({ placeholder, icon, onChange }) => {
    return (
        <label className={classes.label}>
            <img className={classes.icon} src={icon.src} alt={icon.alt} />
            <input
                className={classes.input}
                placeholder={placeholder}
                onChange={onChange && ((event) => onChange(event))}
            />
        </label>
    );
};

export default CustomInput;
