import { FC, useEffect, useState } from "react";
import classes from "./AdminProductCard.module.sass";
import { Product, ProductSizeTypes } from "../../types/types";
import CustomError from "../error/CustomError";
import { getProductsFromStorage, getTypesFromStorage } from "../../utils/utils";

interface AdminProductCardProps {
    defaultValues: Product;
    save: (product: Product) => void;
}

const AdminProductCard: FC<AdminProductCardProps> = ({
    defaultValues,
    save,
}) => {
    const types = getTypesFromStorage();
    const products = getProductsFromStorage();
    const [isError, setIsError] = useState(false);
    const [values, setValues]: [
        Product,
        React.Dispatch<React.SetStateAction<Product>>
    ] = useState(defaultValues);
    useEffect(() => {
        setValues(defaultValues);
    }, [defaultValues]);
    const onInputChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let types;
        let temp = values.care_type === "" ? [] : values.care_type.split(", ");
        if (event.currentTarget.checked) {
            temp.push(event.currentTarget.value);
        } else {
            temp = temp.filter((type) => type !== event.currentTarget.value);
        }
        types = temp.join(", ");
        setValues({ ...values, care_type: types });
    };
    const validate = () => {
        for (let entry of Object.entries(values)) {
            if (!entry[1]) {
                setIsError(true);
                return;
            }
        }
        setIsError(false);
    };
    const saveChanges = () => {
        validate();
        if (!isError) {
            save(values);
        }
    };
    const picOptions = products.map((product) => (
        <option key={product.barcode} value={product.pic}>
            {product.pic}
        </option>
    ));
    const careInputs = types.map((type: string, index) => {
        return (
            <label key={index} className={classes["checkbox-label"]}>
                <input
                    type="checkbox"
                    value={type}
                    onChange={onCheckboxChange}
                />
                {type}
            </label>
        );
    });
    const typeOptions = Object.values(ProductSizeTypes).map((type) => {
        return (
            <option key={type} value={type}>
                {type}
            </option>
        );
    });
    return (
        <form className={classes.container}>
            <input
                className={classes.input}
                placeholder="Название"
                name="name"
                defaultValue={defaultValues.name}
                onChange={onInputChange}
            />
            <select
                className={classes.input}
                name="type"
                onChange={onInputChange}
            >
                {typeOptions}
            </select>
            <input
                className={classes.input}
                placeholder="Размер"
                name="size"
                onChange={onInputChange}
                defaultValue={defaultValues.size}
            />
            <input
                type="number"
                className={classes.input}
                placeholder="Штрихкод"
                name="barcode"
                onChange={onInputChange}
                defaultValue={defaultValues.barcode}
            />
            <input
                className={classes.input}
                placeholder="Производитель"
                name="producer"
                onChange={onInputChange}
                defaultValue={defaultValues.producer}
            />
            <input
                className={classes.input}
                placeholder="Бренд"
                name="brand"
                onChange={onInputChange}
                defaultValue={defaultValues.brand}
            />
            <textarea
                className={[classes.input, classes.textarea].join(" ")}
                name="description"
                placeholder="Описание"
                rows={10}
                onChange={onInputChange}
                defaultValue={defaultValues.description}
            ></textarea>
            <input
                className={classes.input}
                type="number"
                placeholder="Цена"
                name="price"
                onChange={onInputChange}
                defaultValue={defaultValues.price}
            />
            <select
                className={classes.input}
                name="pic"
                onChange={onInputChange}
            >
                {picOptions}
            </select>
            <fieldset className={classes.fieldset} name="care_type">
                {careInputs}
            </fieldset>
            <button
                className={classes.button}
                onClick={saveChanges}
                type="button"
                data-testid="admin-save-btn"
            >
                Сохранить
            </button>
            {isError ? (
                <CustomError message={"Все поля должны быть заполнены"} />
            ) : null}
        </form>
    );
};

export default AdminProductCard;
