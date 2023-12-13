import {KeyNameChildrenTypes, LastChildrenTypes} from "../pages/ServicePage/types";

export const flattenChildren = (data: any[], result: LastChildrenTypes[] = []) => {
    data.forEach((item) => {
        const newItem: LastChildrenTypes = { key: item.key, name: item.name };
        result.push(newItem);
        if (item.children && item.children.length > 0) {
            flattenChildren(item.children, result);
        }
    });
};

export const addChildFunction = (flattenArray: any[]): LastChildrenTypes[] => {
    const result = flattenArray.map(el => {
        if (el.key.length === 1) {
            const child: any[] = [];
            flattenArray.forEach(elem => {
                if (elem.key[0] === el.key && elem.key.length > 1) {
                    child.push(elem)
                }
            })
            return {...el, children: child}
        }
    })
    return result.filter(Boolean);
}

export function getChildData(apiData: LastChildrenTypes[] | [], current: string): KeyNameChildrenTypes[] | [] {
    const currentObject = apiData.find(el => el.key === current);
    return currentObject ? currentObject.children || [] : [];
}