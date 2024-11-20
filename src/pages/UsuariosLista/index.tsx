import { dadosUsuarioLista } from "../../utils/exemploDeDados";
import { formatarNumeroTelefone } from "../../utils/formatarNumeroTelefone";

export function UsuariosLista() {
    return (
        <div className="flex flex-col min-h-[600px] gap-5">
            <div className="container">
                <section className="w-full h-16 border border-primary flex items-center justify-between p-4 bg-white rounded-t">
                    <div className="flex w-full justify-between gap-6 p-4">
                        <div className="flex gap-2 items-center text-sm">
                            <h3 className="font-bold">Resultados</h3>
                            <p className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">{dadosUsuarioLista.length}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs gap-2 w-[185px] h-[62px]">
                            <p>Buscar por</p>
                            <div className="w-28 h-10 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                                <select className="bg-transparent appearance focus:outline-none text-xs">
                                    <option value="" disabled>Opções</option>
                                    <option defaultValue={"todos"} value="todos">Todos</option>
                                    <option value="administrador">Administrador</option>
                                    <option value="usuario">Usuário</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="overflow-x-auto border-l border-r border-t border-primary rounded rounded-t-none">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-primary text-left text-sm font-semibold text-white">
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Nome</th>
                                <th className="px-4 py-2 border-b border-primary ">Email</th>
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Cargo</th>
                                <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Telefone</th>
                                <th className="px-4 py-2 border-b border-primary">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dadosUsuarioLista.length > 0 && (
                                    dadosUsuarioLista.map((usuario) => (
                                        <tr className="border-b border-primary bg-white">
                                            <td className="px-4 py-2 hidden md:table-cell">{ usuario.nome }</td>
                                            <td className="px-4 py-2 ">{ usuario.email }</td>
                                            <td className="px-4 py-2 hidden md:table-cell">{ usuario.cargo }</td>
                                            <td className="px-4 py-2 hidden md:table-cell">+55 {formatarNumeroTelefone(usuario.telefone)}</td>
                                            <td className="px-4 py-2">
                                                <select className="bg-[#E5E7EB] focus:outline-none rounded p-1">
                                                    <option disabled selected value="" className="text-gray-600">Opções</option>
                                                    <option value="perfil">Perfil</option>
                                                    <option value="historico">Histórico</option>
                                                    <option value="editar">Editar</option>
                                                    <option value="excluir">Excluir</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )
                            }
                        </tbody>
                    </table>
                </section>
            </div>
                <div className="w-full flex items-center justify-center gap-4">
                    <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg">Página Anterior</button>
                    <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg">Proxima Página</button>
                </div>
        </div>


    )
}
