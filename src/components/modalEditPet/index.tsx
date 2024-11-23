import { useForm } from "react-hook-form"
import { IFormPetRegistro, petFormSchema } from "../../schemas/petValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormPet } from "../formPet";


interface IModalEditPet {
  petEdit: IFormPetRegistro;
  onClose: () => void;
}

export function ModalEditPet({petEdit, onClose }: IModalEditPet) {
  const { control, register, handleSubmit, formState: { errors } } = useForm<IFormPetRegistro>({
    resolver: zodResolver(petFormSchema),
    defaultValues: petEdit,
  });

  const onSubmit = (data: IFormPetRegistro) => {
    console.log("dados atualizados");
    console.log(data);
  }
  return (
    <div className="md:w-[720px] w-full sm:min-h-[600px] flex flex-col gap-4 items-center justify-center p-4 bg-white rounded-lg">
      <FormPet onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register} editForm onClose={onClose} />
    </div>
  )
}