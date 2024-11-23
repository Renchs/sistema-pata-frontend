import { useForm } from "react-hook-form"
import { IFormUserRegistro, userFormSchema } from "../../schemas/usuarioValidacao"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormUser } from "../formUser";



//interface UsuarioSemSenha extends Omit<Usuario, 'senha' | 'confirmacaoSenha'> {}

interface IModalEditUser {
    userEdit: {
        nome: string;
        email: string;
        telefone: string;
        tipo: 'administrador' | 'usuario';
    };
    onClose: () => void; 
}
export function ModalEditUser({ userEdit, onClose }: IModalEditUser) {
    const { control, register, handleSubmit, formState: { errors } } = useForm<IFormUserRegistro>({
        resolver: zodResolver(userFormSchema),
        defaultValues: userEdit
    });

    const onSubmit = (data: IFormUserRegistro) => {
        console.log('editou a informacao');
        console.log(data);
    }

    return (
        <div className="flex items-center justify-center">
            <FormUser control={control} errors={errors} handleSubmit={handleSubmit} register={register} onSubmit={onSubmit} editForm onClose={onClose} />
        </div>
    )
}
