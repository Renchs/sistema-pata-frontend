import { useParams } from "react-router-dom"
import { dadosPetLista } from "../../utils/exemploDeDados";
import { formatarData } from "../../utils/formatarData";
// import { IPetDados } from "../../interfaces/IPetDados";
// import { useEffect, useState } from "react";
// import { api } from "../../services/apiService";

export function HistoricoAdocaoPet() {
    const { id } = useParams();
    console.log(id);
    
    // const token = localStorage.getItem('token');
    // const [dadosPetLista, setDadosPetLista] = useState<IPetDados[]>();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await api.get(`/adocao/usuario/${id}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //         });
    //         setDadosPetLista(response.data);
    //         console.log(response.data);

    //     }
    //     fetchData();
    // }, [id, token])

    return (
        <div className="min-h-[700px]">
            <div className="flex items-start justify-center gap-4 w-full p-4 flex-wrap">
                {dadosPetLista && (
                    dadosPetLista.map((pet, i) => (
                        <div key={i} className="w-[346px] h-[342px] flex flex-col justify-center border border-primary rounded-md gap-2 p-4 text-sm bg-white">
                            <div className="flex gap-2">
                                <p>Nome:</p>
                                <p>{pet.nome}</p>
                            </div>
                            <div className="flex gap-2">
                                <p>Espécie:</p>
                                <p>{pet.especie}</p>
                            </div>
                            <div className="flex gap-2">
                                <p>Idade:</p>
                                <p>{formatarData(pet.data_nascimento)} anos</p>
                            </div>
                            <div className="flex gap-2">
                                <p>Personalidade:</p>
                                <p>{pet.personalidade}</p>
                            </div>
                            <div className="flex gap-2">
                                <p>Tamanho:</p>
                                <p>{pet.tamanho}</p>
                            </div>
                            <div className="flex break-words min-h-[100px] flex-col gap-1">
                                <p>Descrição:</p>
                                <p>{pet.descricao}</p>
                            </div>
                        </div>
                    ))
                )}
                {/* {dadosPetLista && dadosPetLista.length > 0 ? (
                    dadosPetLista.map((pet, i) => (
                        <div key={i} className="flex items-center gap-4 w-full">

                            <div>
                                <p>Nome: {pet.nome}</p>
                                <p>Especie: {pet.especie}</p>
                                <p>Data de Adoção: {pet.data_nascimento}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <div> usuario:{id} </div>
                        <p>Nenhum pet ainda foi adotado ainda</p>
                    </div>
                )} */}
            </div>
        </div>
    )
}
