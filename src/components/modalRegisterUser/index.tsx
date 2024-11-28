import { SubmitHandler, useForm } from "react-hook-form";
import { IFormUserRegistro, userFormSchema } from "../../schemas/usuarioValidacao";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormUser } from "../formUser";
import { AxiosError } from "axios";
import { api } from "../../services/apiService";
import toast from "react-hot-toast";


interface IModalRegisterUser {
  onClose: () => void;
  toggleModal: () => void;
}

export function ModalRegisterUser({ onClose, toggleModal }: IModalRegisterUser) {
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative flex flex-col items-center justify-evenly shadow-xl rounded-lg bg-white">
        <button
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          aria-label="Fechar Modal"
        >
          ✖
        </button>
        <div className="flex items-center justify-center">
          <FormUser onSubmit={onSubmit} control={control} errors={errors} handleSubmit={handleSubmit} register={register}  toggleModal={toggleModal}/>
        </div>
        
      </div>
    </div>
  )
}
