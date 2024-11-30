import { useEffect, useRef, useState } from "react";
import { calcularIdade } from "../../utils/calcularIdade";
import { getImagemPet } from "../../utils/imagensExemplo";

interface ICardPet {
    id: number;
    nome: string;
    especie: string;
    data_nascimento: string;
    personalidade: string;
    tamanho: string;
    status?: boolean;
    descricao: string;
    onSelectedId: (id: number) => void;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}
export function CardPet({ id, nome, especie, data_nascimento, status, descricao, personalidade, tamanho, onSelectedId, onDelete, onEdit }: ICardPet) {
    const [showMenu, setShowMenu] = useState(false);
    const tipo = localStorage.getItem("tipo");
    const menuRef = useRef<HTMLDivElement>(null);
    const closeOptions = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setShowMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", closeOptions);
        return () => {
            document.removeEventListener("mousedown", closeOptions);
        }
    }, [])

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
        <div className="relative z-10 w-[346px] h-[442px] flex flex-col justify-between border border-primary rounded-md gap-2 p-4 text-sm bg-white">
            {tipo === "administrador" && (
                <>
                    <div className="w-full flex items-center justify-end">
                        <button onClick={handleClickMenu}>
                            <img className="w-5" src="/src/assets/tres-pontos.svg" alt="" />
                        </button>
                    </div>
                    {showMenu && (
                        <div ref={menuRef} className="absolute right-8 top-3 w-32 bg-white border rounded shadow-lg z-10">
                            <button onClick={handleEditPet} className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white w-full text-left" >Editar</button>

                            <button onClick={handleDeletePet} className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white w-full text-left">Deletar</button>

                        </div>
                    )}
                </>
            )}
            <div className="flex w-full justify-center">
                <img className="w-24 rounded-full" src={getImagemPet(especie)} alt="" />
            </div>
            <div className="flex flex-col gap-1 min-h-[300px]">
                <div className="flex gap-2">
                    <p className="font-bold">Nome:</p>
                    <p>{nome}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Espécie:</p>
                    <p>{especie}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Idade:</p>
                    <p>{calcularIdade(data_nascimento)}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Personalidade:</p>
                    <p>{personalidade}</p>
                </div>
                <div className="flex gap-2">
                    <p className="font-bold">Tamanho:</p>
                    <p>{tamanho}</p>
                </div>
                <div className="flex break-words min-h-[100px] flex-col gap-1">
                    <p className="font-bold">Descrição:</p>
                    <p>{descricao}</p>
                </div>
                {!status && (
                    <div className="flex justify-center">
                        <button onClick={handleChangeIdPet} className="w-[79px] h-[30px] hover:transition border border-primary text-primary bg-white rounded hover:bg-primary hover:text-white ">Adotar</button>
                    </div>
                )}
            </div>
        </div>
    )
}
