import {ChangeEvent, useEffect, useState} from "react";
import {getChildData} from "../utils/utils";
import {KeyNameChildrenTypes, LastChildrenTypes} from "../pages/ServicePage/types";

interface useSearchTypes {
    dataPage: LastChildrenTypes[] | [];
    currentLink: string;
    setCurrentContent: (val: () => (KeyNameChildrenTypes[] | [])) => void;
}
export const useSearch = ({ dataPage, currentLink, setCurrentContent }: useSearchTypes) => {
    const [inputSearch, setInputSearch] = useState<string>('');

    useEffect(() => {
        setCurrentContent(() => {
            if (inputSearch === '') {
                return getChildData(dataPage, currentLink);
            } else {
                return getChildData(dataPage, currentLink).filter(({ name }) => name.includes(inputSearch));
            }
        })

    }, [inputSearch]);

    function onChangeSearch(e: ChangeEvent<HTMLInputElement>): void {
        setInputSearch(e.target.value);
    }

    return {
        inputValue: inputSearch,
        onChangeSearch,
    }
}