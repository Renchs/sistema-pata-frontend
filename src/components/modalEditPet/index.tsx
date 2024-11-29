import { useForm } from "react-hook-form"
import { IFormPetRegistro, petFormSchema } from "../../schemas/petValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormPet } from "../formPet";
import { formatarData } from "../../utils/formatarData";
import { api } from "../../services/apiService";
import toast from "react-hot-toast";


interface IModalEditPet {
  petEdit: IFormPetRegistro;
  onClose: () => void;
}

export function ModalEditPet({id, petEdit, onClose }: IModalEditPet) {
  const { reset, control, register, handleSubmit, formState: { errors } } = useForm<IFormPetRegistro>({
    resolver: zodResolver(petFormSchema),
    defaultValues: {
      nome: petEdit.nome,
      especie: petEdit.especie,
      tamanho: petEdit.tamanho,
      personalidade: petEdit.personalidade,
      descricao: petEdit.descricao,
      data_nascimento: formatarData(petEdit.data_nascimento),
    },


  });

  const onSubmit = async (data: IFormPetRegistro) => {
    await api.put(`/pet/${id}`, data).then(
      reset(),
      onClose(),
      toast.success("Pet editado com sucesso!")
    );
  }

  return (
    <div className="md:w-[720px] w-full sm:min-h-[600px] flex flex-col gap-4 items-center justify-center p-4 bg-white rounded-lg">
      <FormPet onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register} editForm onClose={onClose} />
    </div>
  )
}