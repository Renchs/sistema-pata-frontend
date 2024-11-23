import { useState } from "react";
import { Link } from "react-router-dom";



export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    
    return (
        <header className="w-full h-[74px] flex justify-between items-center bg-white px-4 md:px-8">
            <img className="w-[147px]" src="/src/assets/Logo.png" alt="Ícone do site AdotaPet" />

            <div className="block xl:hidden" onClick={toggleMenu}>
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

            <nav className={`hidden xl:flex gap-6 font-medium`}>
                <Link className="hover:text-primary" to={"/pets"}>Buscar Pet</Link>
                <Link className="hover:text-primary" to={"#"}>Historico de Adoções</Link>
                <Link className="hover:text-primary" to={"/usuarios"}>Gerenciar Usuário</Link>
                <Link className="hover:text-primary" to={"/cadastrar-pet"}>Cadastrar Pet</Link>
                <Link className="hover:text-primary" to={"/cadastrar-usuario"}>Cadastrar Usuário</Link>
            </nav>

            <div className={`hidden w-[184px] h-12 cursor-pointer xl:flex items-center justify-center gap-2 border border-primary rounded-md text-primary`}>
                <img className="w-6" src="/src/assets/iconUser.svg" alt="Ícone de usuário" />
                <p>Minha Conta</p>
            </div>

            <div
                className={`${isMenuOpen ? 'block' : 'hidden'
                    } absolute top-20 left-0 w-full bg-white shadow-lg lg:hidden`}
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

