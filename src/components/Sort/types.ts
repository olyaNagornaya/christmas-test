import {DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction} from "react";
import {KeyNameChildrenTypes} from "../../pages/ServicePage/types";

export interface SortTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    contentChild: KeyNameChildrenTypes[] | [];
    setContentChild: Dispatch<SetStateAction<KeyNameChildrenTypes[] | []>>;
}

export enum SortedDataEnum {
    Key = 'key',
    Name = 'name'
}

export interface SortedDataTabsTypes {
    id: SortedDataEnum;
    title: string;
}