import { FC } from "react";
import classes from "./CustomButton.module.sass";

interface CustomButtonProps {
    text: string;
    icon?: string;
    isSmall?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: FC<CustomButtonProps> = ({
    text,
    icon,
    isSmall,
    onClick,
}) => {
    return (
        <button
            className={[
                classes.button,
                isSmall ? classes["button_small"] : classes["button_big"],
            ].join(" ")}
            onClick={onClick && ((event) => onClick(event))}
        >
            <span
                className={[
                    classes.text,
                    isSmall ? classes["text_small"] : classes["text_big"],
                ].join(" ")}
            >
                {text}
            </span>
            {icon ? <img src={icon} /> : null}
        </button>
    );
};

export default CustomButton;
