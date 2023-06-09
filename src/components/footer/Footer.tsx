import { FC } from "react";
import classes from "./Footer.module.sass";
import CustomInput from "../input/CustomInput";
import NavbarLong from "../navbar/NavbarLong";
import CustomButton from "../button/CustomButton";
import Consultant from "../consultant/Consultant";
import Contacts from "../contacts/Contacts";
import arrowRight from "../../assets/img/svg/arrow-right-circle.svg";
import logo from "../../assets/img/svg/logo.svg";
import downloadIcon from "../../assets/img/svg/download.svg";
import whatsUpIcon from "../../assets/img/svg/whatsup.svg";
import telegramIcon from "../../assets/img/svg/telegram.svg";
import mastercardIcon from "../../assets/img/svg/mastercard.svg";
import visaIcon from "../../assets/img/svg/visa.svg";
import { ColorTypes, MOBILE_BREAKPOINT } from "../../types/types";
import { useViewport } from "../../hooks/useViewport";

const Footer: FC = () => {
    const { width } = useViewport();
    return (
        <footer className={classes.footer}>
            <div className={classes["subscription-container"]}>
                <img className={classes.img} src={logo} alt="logo" />
                {width < MOBILE_BREAKPOINT ? (
                    <CustomButton
                        text="Прайс-лист"
                        icon={{ src: downloadIcon, alt: "download" }}
                        isSmall={false}
                    />
                ) : null}
                <p className={classes.description}>
                    Компания «Султан» — снабжаем
                    <br /> розничные магазины товарами
                    <br /> "под ключ" в Кокчетаве и Акмолинской
                    <br /> области
                </p>
                <p className={classes.text}>Подпишись на скидки и акции</p>
                <div className={classes.email}>
                    <CustomInput
                        placeholder="Введите ваш E-mail"
                        icon={{ src: arrowRight, alt: "arrow-right" }}
                    />
                </div>
            </div>
            <NavbarLong
                items={[
                    "О компании",
                    "Доставка и оплата",
                    "Возврат",
                    "Контакты",
                ]}
                title={"Меню сайта:"}
            />
            <NavbarLong
                items={[
                    "Бытовая химия",
                    "Косметика и гигиена",
                    "Товары для дома",
                    "Товары для детей и мам",
                    "Посуда",
                ]}
                title={"Категории:"}
            />
            {width > MOBILE_BREAKPOINT ? (
                <div className={classes["prices-container"]}>
                    <h2 className={classes.title}>Скачать прайс-лист:</h2>
                    <CustomButton
                        text="Прайс-лист"
                        icon={{ src: downloadIcon, alt: "download" }}
                        isSmall={false}
                    />
                    <p className={classes.text}>Связь в мессенджерах:</p>
                    <div className={classes["icon-container"]}>
                        <img
                            className={classes.icon}
                            src={whatsUpIcon}
                            alt="whatsup"
                        />
                        <img
                            className={classes.icon}
                            src={telegramIcon}
                            alt="telegram"
                        />
                    </div>
                </div>
            ) : null}
            <div className={classes["contacts-container"]}>
                <h2 className={classes.title}>Контакты:</h2>
                <Consultant color={ColorTypes.LIGHT} />
                <div className={classes["mail-container"]}>
                    <Contacts
                        color={ColorTypes.LIGHT}
                        text="opt.sultan@mail.ru "
                        subtext="На связи в любое время"
                    />
                    <div className={classes["icon-container"]}>
                        <img
                            className={classes.icon}
                            src={visaIcon}
                            alt="visa"
                        />
                        <img
                            className={classes.icon}
                            src={mastercardIcon}
                            alt="mastercard"
                        />
                    </div>
                </div>
                {width < MOBILE_BREAKPOINT ? (
                    <div className={classes["messenger-container"]}>
                        <p className={classes.text}>Связь в мессенджерах:</p>
                        <div className={classes["icon-container"]}>
                            <img
                                className={classes.icon}
                                src={whatsUpIcon}
                                alt="whatsup"
                            />
                            <img
                                className={classes.icon}
                                src={telegramIcon}
                                alt="telegram"
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </footer>
    );
};

export default Footer;
