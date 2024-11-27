import { useState, useRef, useEffect } from "react";
import { ModalLogin } from "../modalLogin";

export function DropdownMenu() {
    const [isDropdown, setIsDropdown] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsDropdown((prev) => !prev);
    };

    const closeMenu = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setIsDropdown(false);
        }
    };

    const openLoginModal = () => {
        setIsLoginModalOpen(!isLoginModalOpen);
        setIsDropdown(false);
    };

    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
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
                                <button
                                    onClick={openLoginModal}
                                    className="flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                    Login
                                </button>
                            </li>
                            <li>
                                <a
                                    href="#editar"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                    Histórico de Adoção
                                </a>
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
                                <a
                                    href="#logout"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                )}

            </div>
            {/* Modal de Login */}
            {isLoginModalOpen && <ModalLogin onClose={closeLoginModal} />}
        </>
    );
};

export default DropdownMenu;
