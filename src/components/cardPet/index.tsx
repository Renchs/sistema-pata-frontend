import { useState } from "react";
import { formatarData } from "../../utils/formatarData";

interface ICardPet {
    id: number;
    nome: string;
    especie: string;
    data_nascimento: string;
    personalidade: string;
    tamanho: string;
    descricao: string;
    onSelectedId: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}
export function CardPet({ id, nome, especie, data_nascimento, descricao, personalidade, tamanho, onSelectedId, onDelete, onEdit }: ICardPet) {
    const [showMenu, setShowMenu] = useState(false);

    const handleClickMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleEditPet = () => {
        onEdit(id);
    }

    const handleDeletePet = () => {
        onDelete(id);
    }

    const handleChangeIdPet = () => {
        onSelectedId(id);
    }
    return (
        <div className="relative z-10 w-[346px] h-[342px] flex flex-col justify-center border border-primary rounded-md gap-2 p-4 text-sm bg-white">
            <div className="w-full flex items-center justify-end">
                <button onClick={handleClickMenu}>
                    <img className="w-5" src="/src/assets/tres-pontos.svg" alt="" />
                </button>
            </div>
            {showMenu && (
                <div className="absolute right-8 top-3 w-32 bg-white border rounded shadow-lg z-10">
                    <button onClick={handleEditPet} className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white w-full text-left" >Editar</button>

                    <button onClick={handleDeletePet} className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white w-full text-left">Deletar</button>

                </div>
            )}
            <div className="flex gap-2">
                <p>Nome:</p>
                <p>{nome}</p>
            </div>
            <div className="flex gap-2">
                <p>Espécie:</p>
                <p>{especie}</p>
            </div>
            <div className="flex gap-2">
                <p>Idade:</p>
                <p>{formatarData(data_nascimento)} anos</p>
            </div>
            <div className="flex gap-2">
                <p>Personalidade:</p>
                <p>{personalidade}</p>
            </div>
            <div className="flex gap-2">
                <p>Tamanho:</p>
                <p>{tamanho}</p>
            </div>
            <div className="flex break-words min-h-[100px] flex-col gap-1">
                <p>Descrição:</p>
                <p>{descricao}</p>
            </div>
            <div className="flex justify-center">
                <button onClick={handleChangeIdPet} className="w-[79px] h-[30px] hover:transition border border-primary text-primary bg-white rounded hover:bg-primary hover:text-white ">Adotar</button>
            </div>
        </div>
    )
}
