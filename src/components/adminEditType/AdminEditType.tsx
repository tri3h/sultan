import { FC, useState } from "react";
import classes from "./AdminEditType.module.sass";

interface AdminEditTypeProps {
    defaultTypes: string[];
    saveTypes: (
        newTypes: string[],
        optionSelected: string,
        optionChanged: string
    ) => void;
}

const AdminEditType: FC<AdminEditTypeProps> = ({ defaultTypes, saveTypes }) => {
    const [isSaved, setIsSaved] = useState(false);
    const [optionChanged, setOptionChanged] = useState("");
    const [optionSelected, setOptionSelected] = useState("");
    const [types, setTypes] = useState(defaultTypes);
    const changeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOptionSelected(event.currentTarget.value);
        setOptionChanged(event.currentTarget.value);
    };
    const save = () => {
        if (!optionSelected) {
            return;
        }
        let newTypes = types.filter((type) => type !== optionSelected);
        newTypes.push(optionChanged);
        saveTypes(newTypes, optionSelected, optionChanged);
        setTypes(newTypes);
        setOptionSelected("");
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 1500);
    };
    const options = types.map((type) => (
        <option key={type} value={type} data-testid="admin-type-option">
            {type}
        </option>
    ));
    return (
        <div className={classes["container"]}>
            <select
                className={classes.select}
                onChange={changeOption}
                defaultValue={"DEFAULT"}
                data-testid="admin-type-select"
            >
                <option disabled value={"DEFAULT"} hidden></option>
                {options}
            </select>
            <input
                className={classes.select}
                value={optionChanged}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setOptionChanged(event.currentTarget.value);
                }}
                data-testid="admin-type-input"
            ></input>
            <button className={classes.button} onClick={save}>
                Сохранить
            </button>
            {isSaved ? <div>Сохранено</div> : null}
        </div>
    );
};

export default AdminEditType;
