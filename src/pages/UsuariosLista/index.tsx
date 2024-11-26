import { useState } from "react";

import { CampoTabelaUser } from "../../components/campoTabelaUser";
import { ModalEditUser } from "../../components/modalEditUser";
import { dadosUsuarioLista } from "../../utils/exemploDeDados";

export function UsuariosLista() {
    const [selectIdUser, setSelectIdUser] = useState<number>();
    const [selectEditUser, setSelectEditUser] = useState<number>();
    const [selectDeleteUser, setSelectDeleteUser] = useState<number>();
    const [selectHistorical, setSelectHistorical] = useState<number>();
    const [isModalDeletUsuario, setIsModalDeletUsuario] = useState<boolean>();
    const [isModalPerfil, setIsModalPerfil] = useState<boolean>(false);
    const [isModalEditUser, setIsModalEditUser] = useState<boolean>(false);



    const handleShowHistorical = (id: number) => {
        setSelectHistorical(id);
        console.log(selectHistorical);
    }

    const handleEditUser = (id: number) => {
        setSelectEditUser(id);
        setIsModalEditUser(!isModalEditUser);
        console.log(selectEditUser);
        
    }

    const handleDeleteUser = (id: number) => {
        setSelectDeleteUser(id);
        setIsModalDeletUsuario(!isModalDeletUsuario);
        console.log(selectDeleteUser);
    }

    const handleSelectIdUser = (id: number) => {
        setSelectIdUser(id);
        setIsModalPerfil(!isModalPerfil);
        console.log(selectIdUser);

    }



    return (
        <div className="flex justify-center flex-col gap-5">
            <div className="container">
                <section className="w-full h-16 border border-primary flex items-center justify-between p-4 bg-white rounded-t">
                    <div className="flex w-full justify-between gap-6 p-4">
                        <div className="flex gap-2 items-center text-sm">
                            <h3 className="font-bold">Resultados</h3>
                            <p className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">{dadosUsuarioLista.length}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs gap-2 w-[185px] h-[62px]">
                            <p>Buscar por</p>
                            <div className="w-28 h-10 flex justify-center items-center text-center rounded font-bold">
                                <select className="p-2 border rounded bg-white text-xs">
                                    <option value="" disabled>Opções</option>
                                    <option defaultValue={"todos"} value="todos">Todos</option>
                                    <option value="administrador">Administrador</option>
                                    <option value="usuario">Usuário</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                {isModalDeletUsuario && (
                    <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-xl w-80 sm:w-[600px] text-center">
                            <h3 className="text-lg font-semibold mb-4">Você tem certeza que deseja excluir o registro desse usuario?</h3>
                            <div className="flex justify-center gap-4">
                                <button className="w-[150px] h-10 rounded-lg bg-white border border-primary text-primary" onClick={() => setIsModalDeletUsuario(false)}>Cancelar</button>
                                <button className="w-[150px] h-10 rounded-lg bg-red-500 text-white" onClick={() => console.log('Deletou o usuario ', setSelectDeleteUser)}>Deletar</button>
                            </div>
                        </div>
                    </div>
                )}

                {isModalEditUser && (
                    <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <ModalEditUser userEdit={{
                            nome: 'teste',
                            email: 'teste@gmail.com',
                            telefone: '12345678910',
                            tipo: 'administrador',
                        }} onClose={() => setIsModalEditUser(!isModalEditUser)} />    
                    </div>
                )}

                {isModalPerfil && (
                    <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-xl h-80 w-80 sm:w-[400px] flex flex-col justify-between items-center">
                            <h3 className="text-lg font-semibold mb-4">Detalhes do Usuário</h3>
                            <div className="flex flex-col gap-4">
                                <p>Nome: {dadosUsuarioLista[0].nome}</p>
                                <p>Email: {dadosUsuarioLista[0].email}</p>
                                <p>Telefone: {dadosUsuarioLista[0].telefone}</p>
                                <p>Cargo: {dadosUsuarioLista[0].tipo}</p>
                            </div>
                            <button onClick={() => setIsModalPerfil(!isModalPerfil)} className="w-[150px] h-10 rounded-lg bg-red-500 text-white">Fechar</button>
                        </div>
                    
                    </div>
                )}
                <section className="overflow-x-auto border-l border-r border-t border-primary rounded rounded-t-none">
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
                                dadosUsuarioLista.length > 0 && (
                                    dadosUsuarioLista.map((usuario, i) => (
                                        <CampoTabelaUser key={i} id={i} nome={usuario.nome} email={usuario.email} telefone={usuario.telefone} cargo={usuario.tipo} onDelete={handleDeleteUser} onEdit={handleEditUser} onSelectedId={handleSelectIdUser} onhistorical={handleShowHistorical} />
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
