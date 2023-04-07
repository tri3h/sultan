import { FC, useState } from "react";
import classes from "./Header.module.sass";
import CustomButton from "../button/CustomButton";
import Cart from "../cart/Cart";
import Contacts from "../contacts/Contacts";
import downloadIcon from "../../assets/img/svg/download.svg";
import frameEmptyIcon from "../../assets/img/svg/frame-empty.svg";
import searchEmptyIcon from "../../assets/img/svg/search-empty.svg";
import closeIcon from "../../assets/img/svg/close.svg";
import phoneIcon from "../../assets/img/svg/phone.svg";
import phoneEmptyIcon from "../../assets/img/svg/phone-empty.svg";
import listIcon from "../../assets/img/svg/list.svg";
import logo from "../../assets/img/svg/logo.svg";
import locationIcon from "../../assets/img/svg/location.svg";
import mailIcon from "../../assets/img/svg/mail.svg";
import NavbarShort from "../navbar/NavbarShort";
import { ColorTypes } from "../../types/types";

const MobileHeader: FC = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    return (
        <header className={classes.header}>
            <div className={classes.top}>
                {isHeaderOpen ? (
                    <img
                        src={closeIcon}
                        alt="close"
                        width={50}
                        onClick={() => {
                            setIsHeaderOpen(false);
                        }}
                    />
                ) : (
                    <img
                        src={listIcon}
                        alt="open"
                        width={50}
                        onClick={() => {
                            setIsHeaderOpen(true);
                        }}
                    />
                )}
                <img src={logo} alt="logo" />
                <Cart></Cart>
            </div>
            <div className={classes.bottom}>
                <div className={classes["mobile-button"]}>
                    <img
                        className={classes["frame-icon"]}
                        src={frameEmptyIcon}
                        alt="frame"
                    />
                    <p className={classes.text}>Каталог</p>
                </div>
                <div className={classes.delimiter}></div>
                <div className={classes["mobile-button"]}>
                    <img
                        className={classes["search-icon"]}
                        src={searchEmptyIcon}
                        alt="search"
                    />
                    <p className={classes.text}>Поиск</p>
                </div>
            </div>
            {isHeaderOpen ? (
                <div>
                    <div className={classes["mobile-top"]}>
                        <Contacts
                            color={ColorTypes.DARK}
                            icon={{ src: locationIcon, alt: "location" }}
                            text="г. Кокчетав, ул. Ж. Ташенова 129Б"
                            subtext="(Рынок Восточный)"
                        />
                        <Contacts
                            color={ColorTypes.DARK}
                            icon={{ src: mailIcon, alt: "mail" }}
                            text="opt.sultan@mail.ru "
                            subtext="На связи в любое время"
                        />
                        <Contacts
                            color={ColorTypes.DARK}
                            icon={{ src: phoneEmptyIcon, alt: "phone" }}
                            text="Отдел продаж"
                            subtext="+7 (777) 490-00-91"
                        />
                        <p className={classes["mobile-text"]}>
                            время работы: 9:00-20:00
                        </p>
                        <div className={classes["mobile-call-container"]}>
                            <img src={phoneIcon} alt="phone" />
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
                            icon={{ src: downloadIcon, alt: "download" }}
                            isSmall={false}
                        />
                    </div>
                </div>
            ) : null}
        </header>
    );
};

export default MobileHeader;
