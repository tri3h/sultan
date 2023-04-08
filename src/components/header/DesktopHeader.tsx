import { FC } from "react";
import classes from "./Header.module.sass";
import CustomButton from "../button/CustomButton";
import CustomInput from "../input/CustomInput";
import Consultant from "../consultant/Consultant";
import Cart from "../cart/Cart";
import Contacts from "../contacts/Contacts";
import downloadIcon from "../../assets/img/svg/download.svg";
import frameIcon from "../../assets/img/svg/frame.svg";
import searchIcon from "../../assets/img/svg/search.svg";
import logo from "../../assets/img/svg/logo.svg";
import consultantPic from "../../assets/img/consultant.png";
import locationIcon from "../../assets/img/svg/location.svg";
import mailIcon from "../../assets/img/svg/mail.svg";
import NavbarShort from "../navbar/NavbarShort";
import { ColorTypes } from "../../types/types";
import { Link } from "react-router-dom";

const DesktopHeader: FC = () => {
    return (
        <header data-testid="header" className={classes.header}>
            <div className={classes.top}>
                <div className={classes["contacts-container"]}>
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
                <img src={logo} alt="logo" />
                <CustomButton
                    text="Каталог"
                    icon={{ src: frameIcon, alt: "frame" }}
                    isSmall={false}
                />
                <div className={classes["input-container"]}>
                    <CustomInput
                        placeholder="Поиск..."
                        icon={{ src: searchIcon, alt: "search" }}
                    />
                </div>
                <Consultant
                    color={ColorTypes.DARK}
                    img={{ src: consultantPic, alt: "consultant" }}
                ></Consultant>
                <CustomButton
                    text="Прайс-лист"
                    icon={{ src: downloadIcon, alt: "download" }}
                    isSmall={false}
                />
                <Cart />
            </div>
        </header>
    );
};

export default DesktopHeader;
