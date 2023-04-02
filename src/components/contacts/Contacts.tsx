import { FC } from "react";
import classes from "./Contacts.module.css";
import { Color, ColorTypes } from "../../types/types";

interface ContactsProps {
    icon?: string;
    text: string;
    subtext: string;
    color: Color;
}

const Contacts: FC<ContactsProps> = ({ icon, text, subtext, color }) => {
    const colorText =
        color === ColorTypes.DARK
            ? classes["text_dark"]
            : classes["text_light"];
    return (
        <div className={classes.container}>
            {icon && <img src={icon} />}
            <div className={classes["text-container"]}>
                <span className={[classes.text, colorText].join(" ")}>
                    {text}
                </span>
                <span className={[classes.subtext, colorText].join(" ")}>
                    {subtext}
                </span>
            </div>
        </div>
    );
};

export default Contacts;
