import { FC } from "react";
import classes from "./filterProducer.module.sass";
import CustomInput from "../input/CustomInput";
import searchIcon from "../../assets/img/svg/search.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import CheckboxListExpandable, {
    CheckboxItem,
} from "../checkboxListExpandable/CheckboxListExpandable";

const FilterProducer: FC = () => {
    const { producer_checkboxes } = useTypedSelector((state) => state.filter);
    const { setProducerCheckboxes, setProducerSearch } = useActions();
    const { products } = useTypedSelector((state) => state.product);
    const changeProducer = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name;
        if (event.currentTarget.checked) {
            setProducerCheckboxes([...producer_checkboxes, name]);
        } else {
            setProducerCheckboxes(
                [...producer_checkboxes].filter((value) => value !== name)
            );
        }
    };
    const getItems = (): CheckboxItem[] => {
        const producers = products.map((value) => value.producer);
        let set = new Set([...producers]);
        let map = new Map();
        for (let producer of set) {
            map.set(producer, 0);
        }
        for (let producer of producers) {
            let value = map.get(producer);
            map.set(producer, value + 1);
        }
        let items: CheckboxItem[] = [];
        for (let producer of map) {
            items.push({ count: producer[1], name: producer[0] });
        }
        return items;
    };
    return (
        <div className={classes.container}>
            <span className={classes.title}>Производитель</span>
            <div className={classes.search}>
                <CustomInput
                    placeholder="Поиск..."
                    icon={{ src: searchIcon, alt: "search" }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setProducerSearch(event.currentTarget.value);
                    }}
                />
            </div>
            <CheckboxListExpandable
                items={getItems()}
                maxVisible={4}
                onChange={changeProducer}
            />
        </div>
    );
};

export default FilterProducer;
