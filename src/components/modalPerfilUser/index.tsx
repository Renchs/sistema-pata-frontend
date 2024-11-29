import { useEffect, useState } from "react";
import { IUsuarioDados } from "../../interfaces/IUsuarioDados";
import { api } from "../../services/apiService";
import { formatarNumeroTelefone } from "../../utils/formatarNumeroTelefone";

interface IModalPerfil {
    idUser: number;
    onClose: () => void;
}
export function ModalPerfilUser({ idUser, onClose }: IModalPerfil) {
    const [dadosUsuario, setDadosUsuario] = useState<IUsuarioDados>();
    useEffect(() => {
        api.get(`/usuario/${idUser}`)
           .then(response => response.data)
           .then(data => setDadosUsuario(data))
           .catch(error => console.error(error));
    }, [idUser])

    return (
        <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl h-80 w-80 sm:w-[400px] flex flex-col justify-between items-center">
                <h3 className="text-lg font-semibold mb-4">Detalhes do Usuário</h3>
                <div className="flex flex-col gap-4">
                    <p>Nome: {dadosUsuario?.nome}</p>
                    <p>Email: {dadosUsuario?.email}</p>
                    <p>Telefone: {formatarNumeroTelefone(dadosUsuario?.telefone || "")}</p>
                    <p>Cargo: {dadosUsuario?.tipo}</p>
                </div>
                <button onClick={onClose} className="w-[150px] h-10 rounded-lg bg-red-500 text-white">Fechar</button>
            </div>

        </div>
    )
}
