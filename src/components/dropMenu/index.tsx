import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { Link } from "react-router-dom";

export function DropdownMenu() {
    const [isDropdown, setIsDropdown] = useState(false);
    const auth = useContext(AuthContext);
    const menuRef = useRef<HTMLDivElement>(null);
    const id = localStorage.getItem("id");

    const toggleMenu = () => {
        setIsDropdown((prev) => !prev);
    };

    const closeMenu = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", closeMenu);
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <>
            <div className="relative" ref={menuRef}>
                {/* Botão "Minha Conta" */}
                <button onClick={toggleMenu} className="hidden w-[184px] relative h-12 cursor-pointer lg:flex items-center justify-center gap-2 border border-primary rounded-md text-primary focus:outline-none">
                    <img className="w-6" src="/src/assets/iconUser.svg" alt="Ícone de usuário" />
                    Minha Conta
                </button>

                {/* Dropdown */}
                {isDropdown && (
                    <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <ul className="py-1">
                            <li>
                                <Link
                                    to={`/historico-usuario/${id}`}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                    Histórico de Adoção
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#editar"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                    Editar Informações
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={auth?.logout}
                                    className="w-full flex px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                    Sair
                                </button>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
        </>
    );
};

export default DropdownMenu;
