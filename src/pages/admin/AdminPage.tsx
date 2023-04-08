import { FC, useState } from "react";
import classes from "./AdminPage.module.sass";
import AdminProductCard from "../../components/adminProductCard/AdminProductCard";
import { LOCAL_STORAGE_DATA, Product } from "../../types/types";
import { getProductsFromStorage, getTypesFromStorage } from "../../utils/utils";
import AdminEditType from "../../components/adminEditType/AdminEditType";

const AdminPage: FC = () => {
    const products = getProductsFromStorage();
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
    const storageTypes = getTypesFromStorage();
    const [careTypes, setCareTypes] = useState(storageTypes);
    const [editingDefaultValues, setEditingDefaultValues] =
        useState(addingDefaultValues);
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
    const chooseEditProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    const saveCareTypes = (
        newTypes: string[],
        optionSelected: string,
        optionChanged: string
    ) => {
        let newProducts = products.map((product) => {
            let newTypes = product.care_type.split(", ");
            const index = newTypes.findIndex((type) => type === optionSelected);
            if (index !== -1) {
                newTypes[index] = optionChanged;
            }
            return { ...product, care_type: newTypes.join(", ") };
        });
        localStorage.setItem(
            LOCAL_STORAGE_DATA.CARE_TYPES,
            JSON.stringify(newTypes)
        );
        localStorage.setItem(
            LOCAL_STORAGE_DATA.PRODUCTS,
            JSON.stringify(newProducts)
        );
        setCareTypes(newTypes);
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
                <AdminEditType
                    defaultTypes={careTypes}
                    saveTypes={saveCareTypes}
                />
            </div>
            <div>
                <h1 className={classes.title}>Редактирование товаров</h1>
                <div className={classes["edit-container"]}>
                    <p className={classes.text}>
                        Выберите товар для редактирования:
                    </p>
                    <select
                        className={[
                            classes.select,
                            classes["edit-select"],
                        ].join(" ")}
                        onChange={chooseEditProduct}
                        defaultValue={"DEFAULT"}
                    >
                        <option disabled value={"DEFAULT"} hidden></option>
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
