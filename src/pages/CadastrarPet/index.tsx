import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormPetRegistro, petFormSchema } from "../../schemas/petValidacao";
import { FormPet } from "../../components/formPet";


export function CadastrarPet() {
    const { control, register, handleSubmit, formState: { errors } } = useForm<IFormPetRegistro>({
        resolver: zodResolver(petFormSchema)
    });


    const onSubmit = (data: IFormPetRegistro) => {        
        console.log(data);
    }

    return (
        <div className="md:w-[720px] w-full sm:min-h-[600px] flex flex-col gap-4 items-center justify-center shadow-md p-4 bg-white rounded-lg">
            <FormPet onSubmit={onSubmit} control={control}  errors={errors} handleSubmit={handleSubmit} register={register} />
        </div>
    )
}
