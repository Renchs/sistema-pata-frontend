import { useCallback, useEffect, useState } from "react";
import { CardPet } from "../../components/cardPet";
import { CampoFiltroPet } from "../../components/campoFiltroPet";
import { ModalEditPet } from "../../components/modalEditPet";
import { IFormPetRegistro } from "../../schemas/petValidacao";
import { IPetDados } from "../../interfaces/IPetDados";
import { api } from "../../services/apiService";
import toast from "react-hot-toast";

export function BuscarPets() {
    const [selectPersonalidade, setSelectPersonalidade] = useState('');
    const [selectTamanho, setSelectTamanho] = useState('');
    const [searchEspecie, setSearchEspecie] = useState('');
    const [selectAdocaoId, setSelectAdocaoId] = useState<number>();
    const [selectEditPet, setSelectEditPet] = useState<number>();
    const [selectDeletePet, setSelectDeletePet] = useState<number>();
    const [isModalDeletePet, setIsModalDeletePet] = useState(false);
    const [isModalEditPet, setIsModalEditPet] = useState(false);
    const [isModalAdotPet, setIsModalAdotPet] = useState(false);
    const [petEdit, setPetEdit] = useState<IFormPetRegistro>();
    const [petsData, setPetsData] = useState<IPetDados[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 9;

    const fetchData = useCallback(async () => {
        try {
            const result = await api.get('/pets', {
                params: {
                    personalidade: selectPersonalidade !== 'todos' ? selectPersonalidade : "",
                    tamanho: selectTamanho !== 'todos' ? selectTamanho : "",
                    especie: searchEspecie,
                },
            });
            setPetsData(result.data);
        } catch (error) {
            console.error("Erro ao buscar pets:", error);
        }
    }, [selectPersonalidade, selectTamanho, searchEspecie]);

    useEffect(() => {
        fetchData();
    }, [fetchData, isModalDeletePet, isModalEditPet]);


    const handleSelectPersonalidade = (personalidade: string) => {
        setSelectPersonalidade(personalidade);
    }

    const petAdoption = async () => {        
        console.log('adotou: ',selectAdocaoId);
        
    }

    const handleSelectEditPet = (petId: number) => {
        setSelectEditPet(petId);
        setIsModalEditPet(true);
    }

    const handleSelectDeletePet = (petId: number) => {
        setSelectDeletePet(petId);
        setIsModalDeletePet(true);
    }

    const deletePet = async () => {
        await api.delete(`/pet/${selectDeletePet}`).then(() => {
            setIsModalDeletePet(false);
            toast.success('Pet deletado com sucesso.');
        });
            
    }

    const handleSelectAdocaoId = (adocaoId: number) => {
        setIsModalAdotPet(true);
        setSelectAdocaoId(adocaoId);
    }

    const handleSelectTamanho = (tamanho: string) => {
        setSelectTamanho(tamanho);
    }

    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const currentPets = petsData.slice(indexOfFirstPet, indexOfLastPet);
    const totalPages = Math.ceil(petsData.length / petsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center p-4 gap-4">
            <div className="w-[80%] sm:w-[500px] py-2 flex border rounded bg-white border-primary px-2">
                <input className="w-full sm:w-[500px] rounded focus:outline-none"
                    placeholder="Pesquisar por espécie"
                    type="text"
                    value={searchEspecie}
                    onChange={(e) => setSearchEspecie(e.target.value)} />
                <button onClick={fetchData}>
                    <img src="/src/assets/search.svg" alt="Ícone de Pesquisa" />
                </button>
            </div>

            <CampoFiltroPet
                onSelectTamanho={handleSelectTamanho}
                onSelectPersonalidade={handleSelectPersonalidade}
            />

            <div className="flex gap-2 items-center text-sm">
                <h3 className="font-bold">Resultados</h3>
                <p className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">{petsData?.length}</p>
            </div>

            {isModalEditPet && petEdit && (
                <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <ModalEditPet petEdit={petEdit} onClose={() => setIsModalEditPet(false)} />
                </div>
            )}

            {isModalDeletePet && (
                <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-80 sm:w-[600px] text-center">
                        <h3 className="text-lg font-semibold mb-4">Você tem certeza que deseja excluir o registro desse pet?</h3>
                        <div className="flex justify-center gap-4">
                            <button
                                className="w-[150px] h-10 rounded-lg bg-white border border-primary text-primary"
                                onClick={() => setIsModalDeletePet(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="w-[150px] h-10 rounded-lg bg-red-500 text-white"
                                onClick={() => deletePet()}
                            >
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isModalAdotPet && (
                <div className="fixed z-20 inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-80 sm:w-[600px] text-center">
                        <h3 className="text-lg font-semibold mb-4">Ficamos muito felizes com a sua adoção, clique novamente para confirmar</h3>
                        <div className="flex justify-center gap-4">
                            <button
                                className="w-[150px] h-10 rounded-lg bg-white border border-primary text-primary"
                                onClick={() => setIsModalAdotPet(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="w-[150px] h-10 rounded-lg bg-primary text-white"
                                onClick={() => petAdoption()}
                            >
                                Adotar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-start justify-center min-h-[700px] gap-4 w-full p-4 flex-wrap">
                {currentPets && currentPets.length > 0 ? (
                    currentPets.map((pet, i) => (
                        <CardPet
                            key={i}
                            id={pet.id}
                            onDelete={handleSelectDeletePet}
                            onEdit={handleSelectEditPet}
                            onSelectedId={handleSelectAdocaoId}
                            nome={pet.nome}
                            especie={pet.especie}
                            personalidade={pet.personalidade}
                            descricao={pet.descricao}
                            data_nascimento={pet.data_nascimento}
                            tamanho={pet.tamanho}
                        />
                    ))
                ) : (
                        <p>Nennhum pet foi encontrado</p>
                )}
            </div>

            <div>
                <div className="w-full flex items-center justify-center gap-4">
                    {currentPage > 1 && (
                        <button
                            className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary
                             border-primary rounded-lg bg-white"
                            onClick={handlePreviousPage}>
                            Página Anterior
                        </button>
                    )}
                    {currentPage < totalPages && (
                        <button
                            className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary
                            border-primary rounded-lg bg-white"
                            onClick={handleNextPage}>
                            Próxima Página
                        </button>
                    )}
                </div>
            </div>
        </div >
    )
}
