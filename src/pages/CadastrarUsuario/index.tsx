import { SubmitHandler, useForm } from "react-hook-form";
import { IFormUserRegistro, userFormSchema } from "../../schemas/usuarioValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormUser } from "../../components/formUser";
import { api } from "../../services/apiService";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export function CadastrarUsuario() {
    const { control, reset, register, handleSubmit, formState: { errors } } = useForm<IFormUserRegistro>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            tipo: undefined
        }
    });

    const onSubmit: SubmitHandler<IFormUserRegistro> = async (data) => {              
        try {
            await api.post('/usuario', data);
            reset();
            toast.success('Novo usuário registrado com sucesso.');

        } catch (error) {
            const err = error as AxiosError;
            const message = (err.response?.data as { message: string })?.message || "Ocorreu um erro inesperado, aguarde e tente novamente.";
            toast.error(message);
        }
    }

    return (
        <div className="flex items-center justify-center mt-4">
            <FormUser onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register} />
        </div>
    )
}
