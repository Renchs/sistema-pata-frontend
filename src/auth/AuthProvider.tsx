import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { api } from "../services/apiService";
import { useNavigate } from "react-router-dom";

interface IAuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: IAuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            setIsLoggedIn(true);
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        setLoading(false); // Marcar como carregado após verificar o token
    }, []);

    const login = (token: string, tipo: string, id: string) => {
        localStorage.setItem('token', token);
        localStorage.setItem('tipo', tipo);
        localStorage.setItem('id', id);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        delete api.defaults.headers.common["Authorization"];
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}