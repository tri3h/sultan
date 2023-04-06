import { FC, useState } from "react";
import classes from "./AdminPage.module.sass";
import AdminProductCard from "../../components/adminProductCard/AdminProductCard";
import { LOCAL_STORAGE_DATA, Product } from "../../types/types";
import { getProductsFromStorage, getTypesFromStorage } from "../../utils/utils";

const AdminPage: FC = () => {
    const products = getProductsFromStorage();
    const types = getTypesFromStorage();
    const addingDefaultValues = {
        name: "",
        size: "",
        barcode: "",
        producer: "",
        brand: "",
        description: "",
        price: "",
        type: products[0].type,
        care_type: "",
        pic: products[0].pic,
    };
    const [editingDefaultValues, setEditingDefaultValues] =
        useState(addingDefaultValues);
    const [careTypeSelected, setCareTypeSelected] = useState("");
    const [careTypeChanged, setCareTypeChanged] = useState("");
    const productOptions = products.map((product) => (
        <option key={product.barcode} value={product.barcode}>
            {product.name}
        </option>
    ));
    const deleteProduct = () => {
        const barcode = editingDefaultValues.barcode;
        const newProducts = products.filter(
            (product) => product.barcode !== barcode
        );
        localStorage.setItem(
            LOCAL_STORAGE_DATA.PRODUCTS,
            JSON.stringify(newProducts)
        );
        setEditingDefaultValues(addingDefaultValues);
    };
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const barcode = event.currentTarget.value;
        const product = products.find((p) => p.barcode === barcode);

        if (product) {
            setEditingDefaultValues({
                name: product.name,
                size: product.size,
                barcode: product.barcode,
                producer: product.producer,
                brand: product.brand,
                description: product.description,
                price: product.price,
                type: product.type,
                care_type: "",
                pic: product.pic,
            });
        }
    };
    const careTypesOptions = types.map((type) => (
        <option key={type} value={type}>
            {type}
        </option>
    ));
    const onCareTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCareTypeSelected(event.currentTarget.value);
        setCareTypeChanged(event.currentTarget.value);
    };
    const onCareTypeInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setCareTypeChanged(event.currentTarget.value);
    };
    const saveCareType = () => {
        let newTypes = types.filter((type) => type !== careTypeSelected);
        newTypes.push(careTypeChanged);
        let newProducts = products.map((product) => {
            let changedTypes = product.care_type.split(", ");
            changedTypes = changedTypes.filter(
                (type) => type !== careTypeSelected
            );
            changedTypes.push(careTypeChanged);
            let result = changedTypes.join(", ");
            return { ...product, care_type: result };
        });
        localStorage.setItem(
            LOCAL_STORAGE_DATA.CARE_TYPES,
            JSON.stringify(newTypes)
        );
        localStorage.setItem(
            LOCAL_STORAGE_DATA.PRODUCTS,
            JSON.stringify(newProducts)
        );
    };
    const addNewProduct = (product: Product) => {
        products.push(product);
        localStorage.setItem(
            LOCAL_STORAGE_DATA.PRODUCTS,
            JSON.stringify(products)
        );
    };
    const editProduct = (product: Product) => {
        let newProducts = products.filter((p) => p.barcode !== product.barcode);
        newProducts.push(product);
        localStorage.setItem(
            LOCAL_STORAGE_DATA.PRODUCTS,
            JSON.stringify(newProducts)
        );
    };
    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.title}>Добавление товара</h1>
                <AdminProductCard
                    defaultValues={addingDefaultValues}
                    save={addNewProduct}
                />
            </div>
            <div>
                <h1 className={classes.title}>Редактирование типов ухода</h1>
                <p className={classes.text}>
                    Выберите тип ухода для редактирования:
                </p>
                <div className={classes["care-type"]}>
                    <select
                        className={classes.select}
                        onChange={onCareTypeChange}
                    >
                        <option disabled selected hidden></option>
                        {careTypesOptions}
                    </select>
                    <input
                        className={classes.select}
                        value={careTypeChanged}
                        onChange={onCareTypeInputChange}
                    ></input>
                    <button className={classes.button} onClick={saveCareType}>
                        Сохранить
                    </button>
                </div>
            </div>
            <div>
                <h1 className={classes.title}>Редактирование товаров</h1>
                <div className={classes.selecting}>
                    <p className={classes.text}>
                        Выберите товар для редактирования:
                    </p>
                    <select
                        className={[
                            classes.select,
                            classes["product-editing-select"],
                        ].join(" ")}
                        onChange={onChange}
                    >
                        <option disabled selected hidden></option>
                        {productOptions}
                    </select>
                    <AdminProductCard
                        defaultValues={editingDefaultValues}
                        save={editProduct}
                    />
                    <button className={classes.button} onClick={deleteProduct}>
                        УДАЛИТЬ ВЫБРАННЫЙ ТОВАР
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
