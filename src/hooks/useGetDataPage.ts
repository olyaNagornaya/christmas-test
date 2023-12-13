import {useCallback, useEffect, useState} from "react";
import {addChildFunction, flattenChildren} from "../utils/utils";
import {serverData} from "../pages/ServicePage/data";
import {KeyNameChildrenTypes, LastChildrenTypes} from "../pages/ServicePage/types";

export const useGetDataPage = () => {
    const [dataPage, setDataPage] = useState<LastChildrenTypes[] | []>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fakeGetData = useCallback(() => {
        setIsLoading(true);
        setTimeout(() => {
            const flattenedData: KeyNameChildrenTypes[] | undefined = [];
            flattenChildren(serverData[0].children, flattenedData);
            setDataPage(addChildFunction(flattenedData));
            setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (dataPage.length === 0) {
            fakeGetData();
        }
    }, [dataPage, fakeGetData])



    return {
        dataPage,
        setDataPage,
        isLoading,
    }
}