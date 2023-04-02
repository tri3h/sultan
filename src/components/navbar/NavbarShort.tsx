import { FC } from "react";
import classes from "./NavbarShort.module.css";

interface NavbarShortProps {
    items: string[];
}

const NavbarShort: FC<NavbarShortProps> = ({ items }) => {
    const lis = items.map((item, index) => (
        <li key={index}>
            <a
                className={
                    index === items.length - 1
                        ? [classes["link"], classes["link_no-delimeter"]].join(
                              " "
                          )
                        : classes["link"]
                }
                href="#"
            >
                {item}
            </a>
        </li>
    ));

    return (
        <nav>
            <ul className={classes["list"]}>{lis}</ul>
        </nav>
    );
};

export default NavbarShort;
