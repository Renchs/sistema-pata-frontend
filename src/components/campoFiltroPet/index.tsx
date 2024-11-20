

interface ICampoFiltroPet {
    onSelectPersonalidade: (value: string) => void;
    onSelectTamanho: (value: string) => void;
}

export function CampoFiltroPet({ onSelectPersonalidade, onSelectTamanho }: ICampoFiltroPet) {

    const handleChangeTamanho = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectPersonalidade(event.target.value);

    }
    const handleChangePersonalidde = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectTamanho(event.target.value);
    }

    return (
        <section className="w-full sm:w-[500px] h-16 border border-primary flex items-center justify-center p-4 bg-white rounded">
            <div className="flex w-full justify-center gap-2">
                <div className="flex items-center justify-center text-xs gap-2 w-[185px] h-[62px]">
                    <p>Tamanho</p>
                    <div className="w-20 h-8 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                        <select onChange={handleChangeTamanho} className="bg-transparent appearance focus:outline-none text-xs">
                            <option value="" disabled>Opções</option>
                            <option defaultValue={""} value="">Todos</option>
                            <option value="pequeno">Pequeno</option>
                            <option value="medio">Médio</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>
                </div>
                <div className="flex items-center justify-center text-xs gap-2 w-[185px] h-[62px]">
                    <p>Personalidade</p>
                    <div className="w-32 h-8 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                        <select onChange={handleChangePersonalidde} className="bg-transparent appearance focus:outline-none text-xs">
                            <option value="" disabled>Opções</option>
                            <option defaultValue={""} value="">Todos</option>
                            <option value="calmo">Calmo</option>
                            <option value="independente">Independente</option>
                            <option value="brincalhao">Brincalhão</option>
                        </select>
                    </div>
                </div>
            </div>

        </section>
    )
}
