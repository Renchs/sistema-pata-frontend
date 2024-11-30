import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { IFormPetRegistro, petFormSchema } from "../../schemas/petValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormPet } from "../formPet";
import { formatarData } from "../../utils/formatarData";
import { api } from "../../services/apiService";
import toast from "react-hot-toast";
import { IPetDados } from "../../interfaces/IPetDados"

interface IModalEditPet {
  petEdit: number;
  onClose: () => void;
}

export function ModalEditPet({ petEdit, onClose }: IModalEditPet) {  
  const { reset, control, register, handleSubmit, formState: { errors } } = useForm<IFormPetRegistro>({
    resolver: zodResolver(petFormSchema)
  });
  useEffect(() => {
    const editPet = async () => {
      api.get<IPetDados>(`/pet/${petEdit}`).then((response) => {
        reset({
          nome: response.data.nome,
          especie: response.data.especie,
          tamanho: response.data.tamanho,
          personalidade: response.data.personalidade,
          descricao: response.data.descricao,
          data_nascimento: formatarData(response.data.data_nascimento),
        })
      })
    }
    editPet();
  }, [petEdit, reset])

  const onSubmit = async (data: IFormPetRegistro) => {
    await api.put(`/pet/${petEdit}`, data).then(
      reset(),
      toast.success("Pet editado com sucesso!"),
      onClose()
    );
  }

  return (
    <div className="md:w-[720px] w-full sm:min-h-[600px] flex flex-col gap-4 items-center justify-center p-4 bg-white rounded-lg">
      <FormPet onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register} editForm onClose={onClose} />
    </div>
  )
}