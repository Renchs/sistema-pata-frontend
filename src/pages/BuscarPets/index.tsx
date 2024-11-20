import { useState } from "react";
import { CardPet } from "../../components/cardPet";
import { dadosPetLista } from "../../utils/exemploDeDados";
import { CampoFiltroPet } from "../../components/campoFiltroPet";

export function BuscarPets() {
    const [selectPersonalidade, setSelectPersonalidade] = useState('');
    const [selectTamanho, setSelectTamanho] = useState('');
    const [selectAdocao, setSelectAdocaoId] = useState<number>();
    const [selectEditPet, setSelectEditPet] = useState<number>();
    const [selectDeletePet, setSelectDeletePet] = useState<number>();

    
    const handleSelectPersonalidade = (personalidade: string) => {
        setSelectPersonalidade(personalidade);
        console.log(selectPersonalidade);
    }

    const handleSelectEditPet = (petId: number) => {
        setSelectEditPet(petId);
        console.log(selectEditPet);
    }

    const handleSelectDeletePet = (petId: number) => {
        setSelectDeletePet(petId);
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
        <div className="w-full flex flex-col max-h-[700px] items-center gap-4">
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
                <p className="text-sm w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-medium">{dadosPetLista.length}</p>
            </div>

            <div className="flex items-start justify-center gap-4 w-full p-4 flex-wrap">
                {dadosPetLista.length > 0 && (
                    dadosPetLista.map((pet, i) => (
                        <CardPet
                            key={i}
                            id={i}
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
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg">Página Anterior</button>
                <button className="sm:w-[150px] hover:transition w-[130px] h-9 sm:h-11 hover:bg-primary hover:text-white border text-primary border-primary rounded-lg">Proxima Página</button>
            </div>

        </div>
    )
}
