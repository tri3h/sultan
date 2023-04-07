import { FC } from "react";
import classes from "./filterType.module.sass";
import CheckboxList from "../checkboxList/CheckboxList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const FilterType: FC = () => {
    const { care_types } = useTypedSelector((state) => state.product);
    const { care_type_checkboxes } = useTypedSelector((state) => state.filter);
    const { setCareTypeCheckboxes } = useActions();
    const changeCareType = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        if (event.currentTarget.checked) {
            setCareTypeCheckboxes([...care_type_checkboxes, name]);
        } else {
            setCareTypeCheckboxes(
                [...care_type_checkboxes].filter((value) => value !== name)
            );
        }
    };
    return (
        <div className={classes.container}>
            <p className={classes.title}>Тип ухода</p>
            <CheckboxList items={care_types} onChange={changeCareType} />
        </div>
    );
};

export default FilterType;
