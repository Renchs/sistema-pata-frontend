import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormPetRegistro, petFormSchema } from "../../schemas/petValidacao";
import { FormPet } from "../../components/formPet";
import toast from "react-hot-toast";
import { api } from "../../services/apiService";

export function CadastrarPet() {
    const { reset, control, register, handleSubmit, formState: { errors } } = useForm<IFormPetRegistro>({
        resolver: zodResolver(petFormSchema)
    });

    const onSubmit: SubmitHandler<IFormPetRegistro> = async (data) => {
        try {
            await api.post('/pet', data);
            reset();
            toast.success('Novo pet registrado com sucesso.');

        } catch (error) {
            const err = error as AxiosError;
            const message = (err.response?.data as { message: string })?.message || "Ocorreu um erro inesperado, aguarde e tente novamente.";
            toast.error(message);
        }
    }

    return (
        <div className="md:w-[720px] w-full sm:min-h-[600px] flex flex-col gap-4 items-center justify-center shadow-md p-4 bg-white rounded-lg">
            <FormPet onSubmit={onSubmit} control={control}  errors={errors} handleSubmit={handleSubmit} register={register} />
        </div>
    )
}
