import { useEffect, useState } from "react";
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
    const [selectAdocao, setSelectAdocaoId] = useState<number>();
    const [selectEditPet, setSelectEditPet] = useState<number>();
    const [selectDeletePet, setSelectDeletePet] = useState<number>();
    const [isModalDeletePet, setIsModalDeletePet] = useState(false);
    const [isModalEditPet, setIsModalEditPet] = useState(false);
    const [petEdit, setPetEdit] = useState<IFormPetRegistro>();
    const [petsData, setPetsData] = useState<IPetDados[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const petsPerPage = 9;

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await api.get('/pets', {
                    params: {
                        personalidade: selectPersonalidade !== 'todos' ? selectPersonalidade : "",
                        tamanho: selectTamanho !== 'todos' ? selectTamanho : "",
                    },
                });
                setPetsData(result.data);
            } catch (error) {
                console.error("Erro ao buscar pets:", error);
            }
        };
        fetchData();
    }, [selectPersonalidade, selectTamanho, isModalDeletePet, isModalEditPet]);


    const handleSelectPersonalidade = (personalidade: string) => {
        setSelectPersonalidade(personalidade);
        console.log(selectPersonalidade);
    }

    const handleSelectEditPet = (petId: number,) => {
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
        setSelectAdocaoId(adocaoId);
        console.log(selectAdocao);

    }

    const handleSelectTamanho = (tamanho: string) => {
        setSelectTamanho(tamanho);
        console.log(selectTamanho);
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
                <input className="w-full sm:w-[500px] rounded focus:outline-none" placeholder="Pesquisar por espécie" type="text" />
                <button>
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

            <div className="flex items-start justify-center gap-4 w-full p-4 flex-wrap">
                {currentPets && currentPets.length > 0 && (
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
                )}
            </div>

            <div className="w-full flex items-center justify-center gap-4">
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg bg-white" onClick={handlePreviousPage} disabled={currentPage === 1}>Página Anterior</button>
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg bg-white" onClick={handleNextPage} disabled={currentPage === totalPages}>Proxima Página </button>
            </div>

        </div >
    )
}
