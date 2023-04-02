import { FC } from "react";
import classes from "./Consultant.module.css";
import { Color, ColorTypes } from "../../types/types";

interface ConsultantProps {
    pic?: string;
    color: Color;
}

const Consultant: FC<ConsultantProps> = ({ pic, color }) => {
    const colorText =
        color === ColorTypes.DARK
            ? classes["text_dark"]
            : classes["text_light"];

    return (
        <div className={classes.container}>
            <div className={classes["text-container"]}>
                <span className={[classes.number, colorText].join(" ")}>
                    +7 (777) 490-00-91
                </span>
                <span className={[classes.time, colorText].join(" ")}>
                    время работы: 9:00-20:00
                </span>
                <span className={[classes.call, colorText].join(" ")}>
                    Заказать звонок
                </span>
            </div>
            {pic && (
                <div className={classes.pic}>
                    <img src={pic} />
                </div>
            )}
        </div>
    );
};

export default Consultant;
