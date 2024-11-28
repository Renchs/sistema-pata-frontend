import { createContext } from "react";


interface IAuthContextData {
    isLoggedIn: boolean;
    login: (token: string, tipo: string, id: string) => void;
    logout: () => void;
    loading: boolean;
}



export const AuthContext = createContext<IAuthContextData | null>(null)

