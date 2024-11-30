

interface ICampoFiltroPet {
    onSelectPersonalidade: (value: string) => void;
    onSelectTamanho: (value: string) => void;
    onSelectAdotado: (value: string) => void;
    onSelectOrdenarIdade: (value: string) => void;
}

export function CampoFiltroPet({ onSelectPersonalidade, onSelectTamanho, onSelectAdotado, onSelectOrdenarIdade }: ICampoFiltroPet) {

    const handleChangeTamanho = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectTamanho(event.target.value);

    }

    const handleChangeOrdenarIdade = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectOrdenarIdade(event.target.value);
    }
    
    const handleChangePersonalidde = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectPersonalidade(event.target.value);
    }

    const handleChangeAdotado = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectAdotado(event.target.value);
    }

    return (
        <section className="w-full sm:w-[640px] h-24 sm:h-24 border border-primary flex items-center justify-center flex-wrap p-4 bg-white rounded">
            <div className="flex w-full justify-center gap-2">
                <div className="flex flex-col sm:flex-row items-center justify-center text-xs gap-2 w-[185px] h-[62px]">
                    <p>Tamanho</p>
                    <div className="h-8 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                        <select onChange={handleChangeTamanho} className="bg-transparent appearance focus:outline-none text-xs">
                            <option disabled>Opções</option>
                            <option value="">Todos</option>
                            <option value="pequeno">Pequeno</option>
                            <option value="medio">Médio</option>
                            <option value="grande">Grande</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center text-xs gap-2 w-[185px] h-[62px]">
                    <p>Idade</p>
                    <div className="h-8 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                        <select onChange={handleChangeOrdenarIdade} className="bg-transparent appearance focus:outline-none text-xs">
                            <option disabled>Opções</option>
                            <option value="">Todas</option>
                            <option value="maisNovo">Mais novo</option>
                            <option value="maisVelho">Mais velho</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center text-xs gap-2 w-[185px] h-[62px]">
                    <p>Status</p>
                    <div className="h-8 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                        <select onChange={handleChangeAdotado} className="bg-transparent appearance focus:outline-none text-xs">
                            <option disabled>Opções</option>
                            <option value="todos">Todos</option>
                            <option value="false">Disponiveis</option>
                            <option value="true">Adotaos</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center text-xs gap-2 w-[185px] h-[62px]">
                    <p>Personalidade</p>
                    <div className="h-8 flex justify-center items-center bg-[#E5E7EB] text-center rounded font-bold">
                        <select onChange={handleChangePersonalidde} className="bg-transparent appearance focus:outline-none text-xs">
                            <option disabled>Opções</option>
                            <option value="">Todos</option>
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
