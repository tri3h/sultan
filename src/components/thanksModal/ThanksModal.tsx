import { FC } from "react";
import classes from "./ThanksModal.module.css";

import cancelIcon from "../../assets/img/svg/cancel.svg";
import okIcon from "../../assets/img/svg/ok.svg";

interface ThanksModalProps {
    close: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const ThanksModal: FC<ThanksModalProps> = ({ close }) => {
    return (
        <div>
            <div className={classes.container} onClick={close}></div>
            <div className={classes.center}>
                <div className={classes.window}>
                    <img
                        className={classes.close}
                        src={cancelIcon}
                        onClick={close}
                    />
                    <div className={classes.message}>
                        <img src={okIcon} />
                        <p className={classes.title}>Спасибо за заказ</p>
                        <p className={classes.text}>
                            Наш менеджер свяжется с вами в ближайшее время
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThanksModal;
