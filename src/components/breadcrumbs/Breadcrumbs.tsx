import { FC } from "react";
import classes from "./Breadcrumbs.module.sass";
import { Link } from "react-router-dom";

interface Link {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    links: Link[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links }) => {
    const lis = links.map((link, index) => (
        <li key={index}>
            <Link
                className={
                    index === links.length - 1
                        ? [classes.item, classes["item_picked"]].join(" ")
                        : classes.item
                }
                to={link.url}
            >
                {link.name}
            </Link>
        </li>
    ));
    return <ul className={classes.list}>{lis}</ul>;
};

export default Breadcrumbs;
