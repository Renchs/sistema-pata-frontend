import { SubmitHandler, useForm } from "react-hook-form";
import { IFormUserRegistro, userFormSchema } from "../../schemas/usuarioValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormUser } from "../../components/formUser";

export function CadastrarUsuario() {
    const { control, register, handleSubmit, formState: { errors } } = useForm<IFormUserRegistro>({
        resolver: zodResolver(userFormSchema)
    });

    const onSubmit: SubmitHandler<IFormUserRegistro> = (data) => {
        console.log('registrou');

        console.log(data);
    }

    return (
        <div className="flex items-center justify-center">
            <FormUser onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register} />
        </div>
    )
}
