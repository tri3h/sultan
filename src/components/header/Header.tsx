import { FC, useState } from "react";
import classes from "./Header.module.sass";

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
import closeIcon from "../../assets/img/svg/close.svg";
import phoneIcon from "../../assets/img/svg/phone.svg";
import phoneEmptyIcon from "../../assets/img/svg/phone-empty.svg";
import listIcon from "../../assets/img/svg/list.svg";
import logo from "../../assets/img/svg/logo.svg";
import consultantPic from "../../assets/img/consultant.png";
import locationIcon from "../../assets/img/svg/location.svg";
import mailIcon from "../../assets/img/svg/mail.svg";
import NavbarShort from "../navbar/NavbarShort";
import { ColorTypes } from "../../types/types";
import { useViewport } from "../../hooks/useViewport";
import { Link } from "react-router-dom";

const Header: FC = () => {
    const { width } = useViewport();
    const breakpoint = 992;
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const openHeader = () => {
        setIsHeaderOpen(true);
    };
    const closeHeader = () => {
        setIsHeaderOpen(false);
    };
    const mobileHeader = (
        <header className={classes.header}>
            <div className={classes.top}>
                {isHeaderOpen ? (
                    <img src={closeIcon} width={50} onClick={closeHeader} />
                ) : (
                    <img src={listIcon} width={50} onClick={openHeader} />
                )}
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
            {isHeaderOpen ? (
                <div>
                    <div className={classes["mobile-top"]}>
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
                        <Contacts
                            color={ColorTypes.DARK}
                            icon={phoneEmptyIcon}
                            text="Отдел продаж"
                            subtext="+7 (777) 490-00-91"
                        />
                        <p className={classes["mobile-text"]}>
                            время работы: 9:00-20:00
                        </p>
                        <div className={classes["mobile-call-container"]}>
                            <img src={phoneIcon} />
                            <p className={classes["mobile-call"]}>
                                Заказать звонок
                            </p>
                        </div>
                    </div>
                    <div className={classes["mobile-bottom"]}>
                        <p className={classes["mobile-title"]}>Меню сайта:</p>
                        <NavbarShort
                            items={[
                                "О компании",
                                "Доставка и оплата",
                                "Возврат",
                                "Контакты",
                            ]}
                        />
                        <CustomButton
                            text="Прайс-лист"
                            icon={downloadIcon}
                            isSmall={false}
                        />
                    </div>
                </div>
            ) : null}
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
                <Link className={classes["to-admin"]} to={"/admin"}>
                    На страницу админа
                </Link>
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
    return <>{width < breakpoint ? mobileHeader : desktopHeader}</>;
};

export default Header;
