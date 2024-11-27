import { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../dropMenu";



export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full h-[74px] flex justify-between items-center bg-white px-4 md:px-8">
            <img className="w-[147px]" src="/src/assets/Logo.png" alt="Ícone do site AdotaPet" />

            <div className="flex w-full justify-end lg:hidden" onClick={toggleMenu}>
                <button className="text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <nav className={`hidden lg:flex gap-6 font-medium`}>
                <Link className="hover:text-primary" to={"/pets"}>Buscar Pet</Link>
                <Link className="hover:text-primary" to={"/usuarios"}>Gerenciar Usuário</Link>
                <Link className="hover:text-primary" to={"/cadastrar-pet"}>Cadastrar Pet</Link>
                <Link className="hover:text-primary" to={"/cadastrar-usuario"}>Cadastrar Usuário</Link>
            </nav>

            <DropdownMenu />

            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } absolute z-20 top-20 left-0 w-full bg-white shadow-lg lg:hidden`}
            >
                <nav className="flex flex-col gap-4 p-4 font-medium">
                    <Link className="hover:text-primary" to={"/pets"}>Buscar Pet</Link>
                    <a className="hover:text-primary" href="#">Historico de Adoções</a>
                    <Link className="hover:text-primary" to={"/usuarios"}>Gerenciar Usuário</Link>
                    <Link className="hover:text-primary" to={"/cadastrar-pet"}>Cadastrar Pet</Link>
                    <Link className="hover:text-primary" to={"/cadastrar-usuario"}>Cadastrar Usuário</Link>
                    <a className="hover:text-primary" href="#">Minha Conta</a>
                    <a className="hover:text-primary" href="#">Sair</a>
                </nav>
            </div>
        </header>
    );
};

