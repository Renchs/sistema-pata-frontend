import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { api } from "../../services/apiService";
import { IPetDados } from "../../interfaces/IPetDados";
import { calcularIdade } from "../../utils/calcularIdade";
import { getImagemPet } from "../../utils/imagensExemplo";

interface IAdocaoDados {
    id: number;
    data_adocao: string;
    usuario_id: number;
    pets: IPetDados
}

export function HistoricoAdocaoPet() {
    const { id } = useParams();
    const idUser = localStorage.getItem("id");
    const tipo = localStorage.getItem("tipo");

    const navigate = useNavigate();
    const [currentPage, setCurrent] = useState(1);
    const [dadosPetListaApi, setDadosPetListaApi] = useState<IPetDados[] | null>();
    const [currentPets, setCurrentPets] = useState<IPetDados[]>();
    const petPerPage = 8;
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (idUser !== id && tipo !== "administrador") {
            navigate("/pets");
        }
    }, [idUser, tipo, id, navigate]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get<IAdocaoDados[]>(`/adocao/usuario/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.data.length > 0) {
                setDadosPetListaApi(response.data.map((adocaoDados) => adocaoDados.pets));
            } else {
                setDadosPetListaApi([]); 
            }
        };
        fetchData();
    }, [id, token]);

    useEffect(() => {
        if (dadosPetListaApi) {
            const indexOfLastPet = currentPage * petPerPage;
            const indexOfFirstPet = indexOfLastPet - petPerPage;
            setCurrentPets(dadosPetListaApi.slice(indexOfFirstPet, indexOfLastPet) || []);
        }
    }, [dadosPetListaApi, currentPage]);

    const totalPages = Math.ceil((dadosPetListaApi?.length || 0) / petPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrent(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrent(currentPage - 1);
        }
    };
   

    return (
        <div className="min-h-[700px]">
            <div className="flex min-h-[750px] items-start justify-center gap-4 w-full p-4 flex-wrap">
                {currentPets && currentPets.length > 0 ? (
                    currentPets.map((pet, i) => (
                        <div key={i} className="w-[346px] h-[442px] flex flex-col justify-center border border-primary rounded-md gap-2 p-4 text-sm bg-white">
                            <div className="w-full flex justify-center">
                                <img className="w-24 rounded-full" src={getImagemPet(pet.especie)} alt="" /></div>
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
                                <p>{calcularIdade(pet.data_nascimento)}</p>
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
                ) : (
                    <p>Nenhum pet foi adotado ainda.</p>
                )}
            </div>
            <div className="w-full flex justify-center items-center">
                    <button onClick={handlePrevPage} className="w-[79px] h-[30px] cursor-pointer hover:transition border border-primary text-primary bg-white rounded hover:bg-primary hover:text-white ">Voltar</button>
                    <span className="mx-4">Página {currentPage} de {totalPages}</span>
                    <button onClick={handleNextPage} className="w-[79px] h-[30px] hover:transition border border-primary text-primary bg-white rounded hover:bg-primary hover:text-white ">Próxima</button>
                </div>
        </div>
    )
}
