import { EditorKeyTypes } from "@/types/types";

interface Props {
    key: EditorKeyTypes;
    value: string;
}

export const setToLocalStorage = ({ key, value }: Props) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: EditorKeyTypes) => {
    const value = localStorage.getItem(key);
    console.log(value);
    return value && JSON.parse(value);
};
