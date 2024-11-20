import { useForm } from "react-hook-form";
import { CampoInput } from "../../components/campoInput";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { registroPet } from "../../schemas/petValidacao";



interface ICadastrarPet {
    nome: string;
    especie: string;
    data_nascimento: string;
    descricao: string;
    personalidade: "independente" | "calmo" | "brincalhao";
    tamanho: "pequeno" | "medio" | "grande";
}

export function CadastrarPet() {
    const { register, handleSubmit, formState: { errors } } = useForm<ICadastrarPet>({
        resolver: zodResolver(registroPet)
    });


    const onSubmit = (data: ICadastrarPet) => {
        console.log(data);
    }

    return (
        <div className="md:w-[720px] w-full sm:min-h-[600px] flex flex-col gap-4 items-center justify-center shadow-md p-4 bg-white rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="sm:w-[640px] flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-16 sm:items-start items-center">
                    <CampoInput
                        nomeLabel="Nome do pet"
                        
                        nomeRegistro="nome"
                        type="text"
                        register={register}
                        error={errors.nome}
                    />
                    <CampoInput
                        nomeLabel="Data de nascimento"
                        nomeRegistro="data_nascimento"
                        type="text"
                        register={register}
                        error={errors.data_nascimento}
                    />
                </div>
                <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-16 sm:items-start items-center">
                    <div className="flex flex-col gap-1">
                        <label>Tamanho</label>
                        <select {...register('tamanho')} className="w-[281px] text-sm h-[35px] border border-primary bg-white py-1 px-2 rounded-lg" id="tamanho" name="tamanho" defaultValue="">
                            <option value="" disabled>
                                Selecione
                            </option>
                            <option value="pequeno">Pequeno</option>
                            <option value="medio">Médio</option>
                            <option value="grande">Grande</option>
                        </select>
                        {errors.tamanho && <p className="text-xs w-[280px] text-red-500">{errors.tamanho.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>Personalidade</label>
                        <select {...register('personalidade')} className="w-[281px] text-sm h-[35px] border border-primary bg-white py-1 px-2 rounded-lg" id="personalidade" name="personalidade" defaultValue="">
                            <option value="" disabled>
                                Selecione
                            </option>
                            <option value="independente">Independente</option>
                            <option value="calmo">Calmo</option>
                            <option value="brincalhao">Brincalhão</option>
                        </select>
                        {errors.personalidade && <p className="text-xs w-[280px] text-red-500">{errors.personalidade.message}</p>}
                    </div>
                </div>
                <div className="flex items-start justify-center sm:justify-start w-full">
                    <CampoInput
                        nomeLabel="Especie"
                        nomeRegistro="especie"
                        type="text"
                        register={register}
                        error={errors.especie}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Descrição</label>
                    <textarea {...register('descricao')} className="sm:w-[640px] min-w-[280px] text-sm p-3 h-[120px] border rounded-lg border-primary resize-none" required minLength={5} ></textarea>
                    {errors.descricao && <p className="text-xs w-[280px] text-red-500">{errors.descricao.message}</p>}
                </div>
                <div className="flex gap-4 w-full justify-center">
                    <button className="sm:w-[123px] w-[80px] h-12 border text-primary border-primary rounded-lg">Voltar</button>
                    <button type="submit" className="sm:w-[123px] w-[80px] h-12 bg-primary text-white rounded-lg">Registrar</button>
                </div>
            </form>
        </div>
    )
}
