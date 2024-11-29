import { useEffect, useState } from "react";
import { CardPet } from "../../components/cardPet";
import { CampoFiltroPet } from "../../components/campoFiltroPet";
import { ModalEditPet } from "../../components/modalEditPet";
import { IFormPetRegistro } from "../../schemas/petValidacao";
import { IPetDados } from "../../interfaces/IPetDados";
import { api } from "../../services/apiService";

export function BuscarPets() {
    const [selectPersonalidade, setSelectPersonalidade] = useState('');
    const [selectTamanho, setSelectTamanho] = useState('');
    const [selectAdocao, setSelectAdocaoId] = useState<number>();
    const [selectEditPet, setSelectEditPet] = useState<number>();
    const [selectDeletePet, setSelectDeletePet] = useState<number>();
    const [isModalDeletePet, setIsModalDeletePet] = useState(false);
    const [isModalEditPet, setIsModalEditPet] = useState(false);
    const [petEdit, setPetEdit] = useState<IFormPetRegistro>();
    const [petsData, setPetsData] = useState<IPetDados[]>();

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('/pets');            
            setPetsData(result.data);
        };
        console.log(setPetsData);
        fetchData();
    }, [isModalDeletePet, isModalEditPet]);

    const handleSelectPersonalidade = (personalidade: string) => {
        setSelectPersonalidade(personalidade);
        console.log(selectPersonalidade);
    }

    const handleSelectEditPet = (petId: number) => {
        setSelectEditPet(petId);
        setIsModalEditPet(true);
      
        setPetEdit({
            nome: "Rex",
            especie: "Cachorro",
            tamanho: "medio", 
            personalidade: "brincalhao", 
            descricao: "Um cachorro muito amigável",
            data_nascimento: "10-05-2010",
        });
        
        console.log(selectEditPet);
    }

    const handleSelectDeletePet = (petId: number) => {
        setSelectDeletePet(petId);
        setIsModalDeletePet(true);

        console.log(selectDeletePet);

    }

    const handleSelectAdocaoId = (adocaoId: number) => {
        setSelectAdocaoId(adocaoId);
        console.log(selectAdocao);

    }

    const handleSelectTamanho = (tamanho: string) => {
        setSelectTamanho(tamanho);
        console.log(selectTamanho);
    }

    return (
        <div className="w-full flex flex-col justify-center items-center p-4 gap-4">
            <div className="w-[80%] sm:w-[500px] py-2 flex border rounded bg-white border-primary px-2">
                <input className="w-full sm:w-[500px] rounded focus:outline-none" placeholder="Pesquisar por espécie" type="text" />
                <button>
                    <img src="/src/assets/search.svg" alt="Ícone de Pesquisa" />
                </button>
            </div>

            <CampoFiltroPet
                onSelectPersonalidade={handleSelectPersonalidade}
                onSelectTamanho={handleSelectTamanho}
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
                                onClick={() => console.log('Deletar Pet')}
                            >
                                Deletar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex items-start justify-center gap-4 w-full p-4 flex-wrap">
                {petsData && petsData.length > 0 && (
                    petsData.map((pet, i) => (
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
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg bg-white">Página Anterior</button>
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg bg-white">Proxima Página</button>
            </div>

        </div >
    )
}
