import { FC } from "react";
import classes from "./Header.module.css";

import CustomButton from "../button/CustomButton";
import CustomInput from "../input/CustomInput";
import Consultant from "../consultant/Consultant";
import Cart from "../cart/Cart";
import Contacts from "../contacts/Contacts";

import downloadIcon from "../../assets/img/svg/download.svg";
import frameIcon from "../../assets/img/svg/frame.svg";
import frameEmptyIcon from "../../assets/img/svg/frame-empty.svg";
import searchEmptyIcon from "../../assets/img/svg/search-empty.svg";
import searchIcon from "../../assets/img/svg/search.svg";
import listIcon from "../../assets/img/svg/list.svg";
import logo from "../../assets/img/svg/logo.svg";
import consultantPic from "../../assets/img/consultant.png";
import locationIcon from "../../assets/img/svg/location.svg";
import mailIcon from "../../assets/img/svg/mail.svg";
import NavbarShort from "../navbar/NavbarShort";
import { ColorTypes } from "../../types/types";
import { useViewport } from "../../hooks/useViewport";

const Header: FC = () => {
    const { width } = useViewport();
    const breakpoint = 992;
    const mobileHeader = (
        <header className={classes.header}>
            <div className={classes.top}>
                <img src={listIcon} width={50} />
                <img src={logo} />
                <Cart></Cart>
            </div>
            <div className={classes.bottom}>
                <div className={classes["mobile-button"]}>
                    <img
                        className={classes["frame-icon"]}
                        src={frameEmptyIcon}
                    />
                    <p className={classes.text}>Каталог</p>
                </div>
                <div className={classes.delimiter}></div>
                <div className={classes["mobile-button"]}>
                    <img
                        className={classes["search-icon"]}
                        src={searchEmptyIcon}
                    />
                    <p className={classes.text}>Поиск</p>
                </div>
            </div>
        </header>
    );
    const desktopHeader = (
        <header className={classes.header}>
            <div className={classes.top}>
                <div className={classes["contacts-container"]}>
                    <Contacts
                        color={ColorTypes.DARK}
                        icon={locationIcon}
                        text="г. Кокчетав, ул. Ж. Ташенова 129Б"
                        subtext="(Рынок Восточный)"
                    />
                    <Contacts
                        color={ColorTypes.DARK}
                        icon={mailIcon}
                        text="opt.sultan@mail.ru "
                        subtext="На связи в любое время"
                    />
                </div>
                <NavbarShort
                    items={[
                        "О компании",
                        "Доставка и оплата",
                        "Возврат",
                        "Контакты",
                    ]}
                />
            </div>
            <div className={classes.bottom}>
                <img src={logo} />
                <CustomButton text="Каталог" icon={frameIcon} isSmall={false} />
                <div className={classes["input-container"]}>
                    <CustomInput placeholder="Поиск..." icon={searchIcon} />
                </div>
                <Consultant
                    color={ColorTypes.DARK}
                    pic={consultantPic}
                ></Consultant>
                <CustomButton
                    text="Прайс-лист"
                    icon={downloadIcon}
                    isSmall={false}
                />
                <Cart></Cart>
            </div>
        </header>
    );
    return <div>{width < breakpoint ? mobileHeader : desktopHeader}</div>;
};

export default Header;
