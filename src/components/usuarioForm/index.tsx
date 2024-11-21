import { Controller, FieldError, SubmitHandler, UseFormReturn } from "react-hook-form"
import { CampoInput } from "../campoInput";
import { IRegistroUsuarioNovo } from "../../schemas/usuarioValidacao";




interface IUserForm {
    register: UseFormReturn<IRegistroUsuarioNovo>['register'];
    handleSubmit: UseFormReturn<IRegistroUsuarioNovo>['handleSubmit'];
    onSubmit: SubmitHandler<IRegistroUsuarioNovo>;
    control: UseFormReturn<IRegistroUsuarioNovo>['control'];
    currentUser?: IRegistroUsuarioNovo | null;
    errors: Partial<Record<keyof IRegistroUsuarioNovo, FieldError>>;
}

export function UsuarioForm({ onSubmit, control, register, errors, handleSubmit }: IUserForm) {
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <img className="w-[147px]" src="/src/assets/Logo.png" alt="AdotaPet" />
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
                Criar Conta
            </button>
        </form>

    );
};
