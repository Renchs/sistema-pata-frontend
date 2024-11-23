import { Controller, FieldError, SubmitHandler, UseFormReturn } from "react-hook-form"
import { CampoInput } from "../campoInput";
import { IFormUserRegistro } from "../../schemas/usuarioValidacao";





interface IFormUser {
    register: UseFormReturn<IFormUserRegistro>['register'];
    handleSubmit: UseFormReturn<IFormUserRegistro>['handleSubmit'];
    onSubmit: SubmitHandler<IFormUserRegistro>;
    control: UseFormReturn<IFormUserRegistro>['control'];
    errors: Partial<Record<keyof IFormUserRegistro, FieldError>>;
    editForm?: boolean;
    onClose?: () => void;
}

export function FormUser({ onSubmit, control, register, errors, handleSubmit, editForm, onClose }: IFormUser) {
    return (
        <section className="w-[380px] h-[800px] flex flex-col items-center justify-evenly shadow-xl rounded-lg bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <img className="w-[147px]" src="/src/assets/Logo.png" alt="AdotaPet" />
                <CampoInput
                    nomeLabel="Nome"
                    nomeRegistro="nome"
                    register={register}
                    placeholder="Jhon Doe"
                    type="text"
                    error={errors.nome}
                />
                <CampoInput
                    nomeLabel="Email"
                    nomeRegistro="email"
                    register={register}
                    placeholder="Nome@exemplo.com"
                    type="email"
                    error={errors.email}
                />
                <CampoInput
                    nomeLabel="Confirmar Email"
                    nomeRegistro="confirmarEmail"
                    register={register}
                    placeholder="Nome@exemplo.com"
                    type="email"
                    error={errors.confirmarEmail}
                />
                <CampoInput
                    nomeLabel="Telefone"
                    nomeRegistro="telefone"
                    register={register}
                    type="tel"
                    error={errors.telefone}
                />
                <CampoInput
                    nomeLabel="Senha"
                    nomeRegistro="senha"
                    register={register}
                    type="password"
                    placeholder="********"
                    error={errors.senha}
                />
                <CampoInput
                    nomeLabel="Confirmar Senha"
                    nomeRegistro="confirmarSenha"
                    register={register}
                    type="password"
                    placeholder="********"
                    error={errors.confirmarSenha}
                />
                <Controller
                    name="tipo"
                    control={control}
                    render={({ field }) => (
                        <select defaultValue={""} {...field} id="tipo" required className="focus:outline-none">
                            <option disabled value="">Tipo de conta</option>
                            <option value="usuario">Usuário</option>
                            <option value="administrador">Administrador</option>
                        </select>
                    )}
                />
                <button type="submit" className="w-[281px] h-10 rounded-lg bg-primary text-white">
                    {editForm ? 'Editar' : 'Criar Conta'}
                </button>

                {editForm && (
                    <button onClick={onClose} className="w-[281px] h-10 rounded-lg bg-primary text-white">Voltar</button>
                )}

            </form>
        </section>

    );
};
