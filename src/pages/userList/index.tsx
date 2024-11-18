export function UserList() {
    return (
        <div className="flex flex-col gap-1">
            {/* Seção de resultados */}
            <section className="w-full h-16 border border-primary flex items-center justify-between p-4 bg-white rounded">
                <div className="flex w-full justify-between gap-6 p-4">
                    <div className="flex gap-2 items-center text-sm">
                        <h3 className="font-bold">Resultados</h3>
                        <p className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">7</p>
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

            {/* Tabela */}
            <section className="overflow-x-auto border-l border-r border-t border-primary rounded">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-primary text-left text-sm font-semibold text-white">
                            <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Nome</th>
                            <th className="px-4 py-2 border-b border-primary ">Email</th>
                            <th className="px-4 py-2 border-b border-primary">Cargo</th>
                            <th className="px-4 py-2 border-b border-primary hidden md:table-cell">Telefone</th>
                            <th className="px-4 py-2 border-b border-primary">Ações</th> {/* A coluna de Ações não vai sumir */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-primary bg-white">
                            <td className="px-4 py-2 hidden md:table-cell">Jon Doe</td>
                            <td className="px-4 py-2 ">john.doe@example.com</td>
                            <td className="px-4 py-2">Usuário</td>
                            <td className="px-4 py-2 hidden md:table-cell">+55 (11) 9999-9999</td>
                            <td className="px-4 py-2">
                                <select className="bg-[#E5E7EB] focus:outline-none rounded p-1">
                                    <option value="" disabled className="text-gray-600">Opções</option>
                                    <option value="perfil">Perfil</option>
                                    <option value="historico">Histórico</option>
                                    <option value="editar">Editar</option>
                                    <option value="excluir">Excluir</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>


    )
}
