import s from "./Sort.module.scss";
import cn from "classnames";
import {sortedTabs} from "./data";
import type {FC} from "react";
import {SortedDataEnum, SortTypes} from "./types";
import {useState} from "react";



const Sort: FC<SortTypes> = ({ contentChild, setContentChild }) => {
    const [currentSort, setCurrentSort] = useState<SortedDataEnum | undefined>();
    function sortedProducts(contentArr: SortTypes['contentChild'], setContentArr: SortTypes['setContentChild'],  id: SortedDataEnum) {
        setCurrentSort(id);
        setContentArr((prevContentArr) => {
            switch (id) {
                case SortedDataEnum.Key:
                    return [...prevContentArr].sort((a, b) => b.key.localeCompare(a.key));
                case SortedDataEnum.Name:
                    return [...prevContentArr].sort((a, b) => a.name.localeCompare(b.name));
                default:
                    return [...prevContentArr].sort((a, b) => b.key.localeCompare(a.key));
            }
        });
    }
    const handleSort = (id: SortedDataEnum) => {
        sortedProducts(contentChild, setContentChild, id);
    }

    return (
        <div className={cn(s.sort)}>
            {sortedTabs.map(({id, title}) => (
                <div className={cn(s.sortLink, {
                    [s.sortLinkSelected]: currentSort === id,
                })}
                     id={id}
                     key={id}
                     onClick={() => handleSort(id)}
                >
                    {title}
                </div>
            ))}
        </div>
    );
};

export default Sort;
