export interface ServerDataTypes {
    key: string;
    name: string;
    children: ChildrenOneLevelTypes[];
}

export interface ChildrenOneLevelTypes {
    key: string;
    name: string;
    children: ChildrenSecondLevelTypes[] | [];
}

interface ChildrenSecondLevelTypes {
    key: string;
    name: string;
    children?: LastChildrenTypes[] | [];
}


export interface LastChildrenTypes {
    key: string;
    name: string;
    children?: KeyNameChildrenTypes[];
}
export interface KeyNameChildrenTypes {
    key: string;
    name: string;
}
