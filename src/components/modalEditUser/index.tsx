import { useForm } from "react-hook-form"
import { IFormUserRegistro, userFormSchema } from "../../schemas/usuarioValidacao"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormUser } from "../formUser";
import { IUsuarioDados } from "../../interfaces/IUsuarioDados";
import { api } from "../../services/apiService";



//interface UsuarioSemSenha extends Omit<Usuario, 'senha' | 'confirmacaoSenha'> {}

interface IModalEditUser {
    userEdit: IUsuarioDados;
    onClose: () => void;
}
export function ModalEditUser({ userEdit, onClose }: IModalEditUser) {
    const { control, register, handleSubmit, reset, formState: { errors } } = useForm<IFormUserRegistro>({
        resolver: zodResolver(userFormSchema),
        defaultValues: {
            nome: userEdit.nome,
            email: userEdit.email,
            endereco: userEdit.endereco,
            confirmarEmail: userEdit.email,
            telefone: userEdit.telefone,
            tipo: (userEdit.tipo || "usuario") as "usuario" | "administrador",
        }
    });

    const onSubmit = async (data: IFormUserRegistro) => {
        await api.put(`usuario/${userEdit.id}`, data);
        reset();
        onClose();
    }

    return (
        <div className="flex items-center justify-center">
            <FormUser control={control} errors={errors} handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} editForm onClose={onClose} />
        </div>
    )
}
