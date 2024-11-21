import { SubmitHandler, useForm } from "react-hook-form";
import { IRegistroUsuarioNovo, userRegistro } from "../../schemas/usuarioValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { UsuarioForm } from "../../components/usuarioForm";

export function CadastrarUsuario() {
    const { control, register, handleSubmit, formState: { errors } } = useForm<IRegistroUsuarioNovo>({
        resolver: zodResolver(userRegistro)
    });
    
    const onSubmit: SubmitHandler<IRegistroUsuarioNovo> = (data) => {
        console.log('registrou');
        
        console.log(data);
    }

    return (
        <div className="flex items-center justify-center">
            <section className="w-[380px] h-[650px] flex flex-col items-center justify-evenly shadow-xl rounded-lg bg-white">
                <UsuarioForm onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register} />
            </section>
        </div>
    )
}
