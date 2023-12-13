import {createContext, Dispatch, SetStateAction} from "react";

interface AuthContextType {
    isAuth: boolean;
    setIsAuth?: Dispatch<SetStateAction<boolean>>;
}
export const AppContext = createContext<AuthContextType>({isAuth: false});
