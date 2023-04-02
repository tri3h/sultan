import { FC } from "react";
import classes from "./ShadowBlock.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface ShadowBlockProps {
    name: string;
}

const ShadowBlock: FC<ShadowBlockProps> = ({ name }) => {
    const { care_type_checkboxes } = useTypedSelector((state) => state.filter);
    const { setCareTypeCheckboxes } = useActions();
    const isChecked = care_type_checkboxes.includes(name);
    const onClick = () => {
        if (isChecked) {
            setCareTypeCheckboxes(
                [...care_type_checkboxes].filter((value) => value !== name)
            );
        } else {
            setCareTypeCheckboxes([...care_type_checkboxes, name]);
        }
    };
    return (
        <div
            className={
                isChecked
                    ? [classes.container, classes["container_checked"]].join(
                          " "
                      )
                    : classes.container
            }
            onClick={onClick}
        >
            <p className={classes.text}>{name}</p>
        </div>
    );
};

export default ShadowBlock;
