import { FC } from "react";
import classes from "./NavbarLong.module.sass";

interface NavbarLongProps {
    items: string[];
    title: string;
}

const NavbarLong: FC<NavbarLongProps> = ({ items, title }) => {
    const lis = items.map((item, index) => (
        <li key={index}>
            <a className={classes.link} href="#">
                {item}
            </a>
        </li>
    ));

    return (
        <nav>
            <h2 className={classes.title}>{title}</h2>
            <ul className={classes.list}>{lis}</ul>
        </nav>
    );
};

export default NavbarLong;
