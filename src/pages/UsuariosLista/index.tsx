import { useEffect, useState } from "react";

import { CampoTabelaUser } from "../../components/campoTabelaUser";
import { ModalEditUser } from "../../components/modalEditUser";
import { api } from "../../services/apiService";
import { IUsuarioDados } from "../../interfaces/IUsuarioDados";
import { ModalDeleteUser } from "../../components/modalDeleteUser";
import { ModalPerfilUser } from "../../components/modalPerfilUser";


export function UsuariosLista() {
    const [selectIdUser, setSelectIdUser] = useState<number>();
    const [selectEditUser, setSelectEditUser] = useState<IUsuarioDados>();
    const [selectDeleteUser, setSelectDeleteUser] = useState<number>();
    const [selectHistorical, setSelectHistorical] = useState<number>();
    const [isModalDeletUsuario, setIsModalDeletUsuario] = useState<boolean>();
    const [isModalPerfil, setIsModalPerfil] = useState<boolean>(false);
    const [isModalEditUser, setIsModalEditUser] = useState<boolean>(false);
    const [userDados, setUserDados] = useState<IUsuarioDados[]>();
    const [selectTypeFindUser, setSelectTypeFindUser] = useState("");

    const handleSelectTypeFindUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectTypeFindUser(event.target.value);        
    }

    useEffect(() => {

        const response = async () => {
            try {
                const url = `/usuarios/${selectTypeFindUser === "todos" ? "" : `?tipo=${selectTypeFindUser}`}` 

                const response = await api.get<IUsuarioDados[]>(url, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    },
                });
                setUserDados(response.data);
            } catch (error) {
                console.log(error);

            }
        }
        response();
    }, [isModalEditUser, isModalDeletUsuario, selectTypeFindUser])


    const handleShowHistorical = (id: number) => {
        setSelectHistorical(id);
        console.log(selectHistorical);
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
            <div className="container bg-white">
                <section className="w-full h-16 border border-primary flex items-center justify-between p-4 rounded-t">
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
                <section className="border-l border-r border-t border-primary rounded rounded-t-none lg:min-w-[900px] h-[700px] border-b">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-primary text-left text-sm font-semibold text-white">
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Nome</th>
                                <th className="px-4 py-2 border-b border-primary ">Email</th>
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Cargo</th>
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Telefone</th>
                                <th className="px-4 py-2 border-b border-primary">Opções</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userDados && userDados.length > 0 && (
                                    userDados.map((usuario) => (
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
                </section>
            </div>
            <div className="w-full flex items-center justify-center gap-4">
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg bg-white">Página Anterior</button>
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg bg-white">Proxima Página</button>
            </div>
        </div>


    )
}
