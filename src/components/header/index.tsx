import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../dropMenu";
import { ModalLogin } from "../modalLogin";
import { ModalRegisterUser } from "../modalRegisterUser";
import { AuthContext } from "../../auth/authContext";



export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
    const auth = useContext(AuthContext);

    const isLogged = localStorage.getItem("token");
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleModal = () => {
        setIsOpenModalLogin(!isOpenModalLogin);
        setIsOpenModalRegister(!isOpenModalRegister);
    }

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
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
                    {isLogged ? (
                        <>
                            <Link className="hover:text-primary" to={"/pets"}>Buscar Pet</Link>
                            <Link className="hover:text-primary" to={"/usuarios"}>Gerenciar Usuário</Link>
                            <Link className="hover:text-primary" to={"/cadastrar-pet"}>Cadastrar Pet</Link>
                            <Link className="hover:text-primary" to={"/cadastrar-usuario"}>Cadastrar Usuário</Link>
                        </>
                    ) : (
                        <>
                            <button className="hover:text-primary" onClick={() => scrollToSection('quem_somos')} >Quem somos</button>
                            <button className="hover:text-primary" onClick={() => scrollToSection('contatos')} >Contatos</button>
                            <button className="hover:text-primary" onClick={() => scrollToSection('beneficios')} >Beneficios da Adoção</button>

                        </>
                    )}
                </nav>

                {isLogged ? (
                    <DropdownMenu />
                ) : (
                    <div className="hidden lg:flex gap-3">
                        <button onClick={() => setIsOpenModalLogin(true)} className="w-32 h-12 rounded-lg bg-primary text-white">Fazer login</button>
                        <button onClick={() => setIsOpenModalRegister(true)} className="w-32 h-12 rounded-lg bg-white text-primary border border-primary">Registre-se</button>
                    </div>
                )}

                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } absolute z-20 top-20 left-0 w-full bg-white shadow-lg lg:hidden`}
                >
                    <nav className="flex flex-col gap-4 p-4 font-medium">
                        {isLogged ? (
                            <>
                                <Link className="hover:text-primary" to={"/pets"}>Buscar Pet</Link>
                                <a className="hover:text-primary" href="#">Historico de Adoções</a>
                                <Link className="hover:text-primary" to={"/usuarios"}>Gerenciar Usuário</Link>
                                <Link className="hover:text-primary" to={"/cadastrar-pet"}>Cadastrar Pet</Link>
                                <Link className="hover:text-primary" to={"/cadastrar-usuario"}>Cadastrar Usuário</Link>
                                <a className="hover:text-primary" href="#">Minha Conta</a>
                                <button className="flex hover:text-primary" onClick={auth?.logout}>Sair</button>
                            </>
                        ) : (
                            <>
                                <button className="hover:text-primary" onClick={() => scrollToSection('quem_somos')} >Quem somos</button>
                                <button className="hover:text-primary" onClick={() => scrollToSection('contatos')} >Contatos</button>
                                <button className="hover:text-primary" onClick={() => scrollToSection('beneficios')} >Beneficios da Adoção</button>
                            </>
                        )}
                    </nav>
                </div>
            </header>
            {isOpenModalLogin && <ModalLogin openModalRegister={() => toggleModal()} onClose={() => setIsOpenModalLogin(false)} />}
            {isOpenModalRegister && <ModalRegisterUser toggleModal={() => toggleModal()} onClose={() => setIsOpenModalRegister(false)} />}
        </>
    );
};

