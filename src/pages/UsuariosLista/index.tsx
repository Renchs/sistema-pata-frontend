import { useEffect, useState } from "react";

import { CampoTabelaUser } from "../../components/campoTabelaUser";
import { ModalEditUser } from "../../components/modalEditUser";
import { api } from "../../services/apiService";
import { IUsuarioDados } from "../../interfaces/IUsuarioDados";
import { ModalDeleteUser } from "../../components/modalDeleteUser";
import { ModalPerfilUser } from "../../components/modalPerfilUser";
import { useNavigate } from "react-router-dom";


export function UsuariosLista() {
    const [selectIdUser, setSelectIdUser] = useState<number>();
    const [selectEditUser, setSelectEditUser] = useState<IUsuarioDados>();
    const [selectDeleteUser, setSelectDeleteUser] = useState<number>();
    const [isModalDeletUsuario, setIsModalDeletUsuario] = useState<boolean>();
    const [isModalPerfil, setIsModalPerfil] = useState<boolean>(false);
    const [isModalEditUser, setIsModalEditUser] = useState<boolean>(false);
    const [userDados, setUserDados] = useState<IUsuarioDados[]>();
    const [selectTypeFindUser, setSelectTypeFindUser] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    
    const idUser = localStorage.getItem("id");
    const userPerPage = 10;

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleSelectTypeFindUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectTypeFindUser(event.target.value);        
    }

    useEffect(() => {

        const response = async () => {
            try {
                const url = `/usuarios/${selectTypeFindUser === "todos" ? "" : `?tipo=${selectTypeFindUser}`}` 

                const response = await api.get<IUsuarioDados[]>(url, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUserDados(response.data.filter((user) => user.id !== Number(idUser)));
                setCurrentPage(1);

            } catch (error) {
                console.log(error);

            }
        }
        response();
    }, [isModalEditUser, isModalDeletUsuario, selectTypeFindUser, idUser])

    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUser = userDados?.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil((userDados?.length || 0) / userPerPage);





    const handleShowHistorical = (id: number) => {     
        return navigate(`/historico-usuario/${id}`);
    }

    const handleEditUser = (user: IUsuarioDados) => {
        setSelectEditUser(user);
        setIsModalEditUser(!isModalEditUser);

    }

    const handleDeleteUser = async (id: number) => {
        setSelectDeleteUser(id);
        setIsModalDeletUsuario(!isModalDeletUsuario);
    }

    const handleSelectIdUser = (id: number) => {
        setSelectIdUser(id);
        setIsModalPerfil(!isModalPerfil);
    }



    return (
        <div className="flex justify-center flex-col gap-5">
            <div className="container">
                <section className="w-full h-16 border border-primary flex items-center justify-between p-4 rounded-t bg-white">
                    <div className="flex w-full justify-between gap-6 p-4">
                        <div className="flex gap-2 items-center text-sm">
                            <h3 className="font-bold">Resultados</h3>
                            <p className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">{userDados?.length}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs gap-2 w-[185px] h-[62px]">
                            <p>Buscar por</p>
                            <div className="w-28 h-10 flex justify-center items-center text-center rounded font-bold">
                                <select value={selectTypeFindUser} onChange={handleSelectTypeFindUser} className="p-2 border rounded text-xs">
                                    <option disabled>Opções</option>
                                    <option value={"todos"}>Todos</option>
                                    <option value="administrador">Administrador</option>
                                    <option value="usuario">Usuário</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                {isModalDeletUsuario && (
                    <ModalDeleteUser idUser={selectDeleteUser!} onClose={() => setIsModalDeletUsuario(!isModalDeletUsuario) } />
                )}

                {isModalEditUser && (
                    <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <ModalEditUser userEdit={{
                            id: selectEditUser!.id,
                            nome: selectEditUser!.nome,
                            email: selectEditUser!.email,
                            telefone: selectEditUser!.telefone,
                            tipo: selectEditUser!.tipo
                        }} onClose={() => setIsModalEditUser(!isModalEditUser)} />
                    </div>
                )}

                {isModalPerfil && (
                    <ModalPerfilUser idUser={selectIdUser!} onClose={() => setIsModalPerfil(!isModalPerfil)} />
                )}
                <section className={`flex flex-col justify-between h-[650px] lg:min-w-[900px]`}>
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-primary border border-primary text-left text-sm font-semibold text-white">
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Nome</th>
                                <th className="px-4 py-2 border-b border-primary ">Email</th>
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Cargo</th>
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Telefone</th>
                                <th className="px-4 py-2 border-b border-primary">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentUser && currentUser.length > 0 && (
                                    currentUser
                                        .map((usuario) => (
                                        <CampoTabelaUser
                                            key={usuario.id}
                                            id={usuario.id}
                                            nome={usuario.nome}
                                            email={usuario.email}
                                            telefone={usuario.telefone}
                                            tipo={usuario.tipo}
                                            onDelete={handleDeleteUser}
                                            onEdit={handleEditUser}
                                            onSelectedId={handleSelectIdUser}
                                            onhistorical={handleShowHistorical}
                                        />
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                    <div className="w-full flex justify-center items-center">
                        <button onClick={handlePrevPage} className="w-[79px] h-[30px] cursor-pointer hover:transition border border-primary text-primary bg-white rounded hover:bg-primary hover:text-white ">Voltar</button>
                        <span className="mx-4">Página {currentPage} de {totalPages}</span>
                        <button onClick={handleNextPage} className="w-[79px] h-[30px] hover:transition border border-primary text-primary bg-white rounded hover:bg-primary hover:text-white ">Próxima</button>
                    </div>
                </section>
            </div>
        </div>


    )
}
