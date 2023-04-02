import { FC } from "react";
import classes from "./CustomError.module.css";

interface CustomErrorProps {
    message: string;
}

const CustomError: FC<CustomErrorProps> = ({ message }) => {
    return <div className={classes.error}> {message}</div>;
};

export default CustomError;
