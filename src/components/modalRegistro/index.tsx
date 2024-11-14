import { useForm } from "react-hook-form"
import { CampoInput } from "../campoInput";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { userRegistro } from "../../schemas/usuarioValidacao";


interface IRegistroUsuario {
    email: string;
    confirmarEmail: string;
    senha: string;
    confirmarSenha: string;
    telefone: string;
    tipo: "usuario" | "administrador";
}

export function ModalRegistro() {
    const { register, handleSubmit, formState: { errors } } = useForm<IRegistroUsuario>({
        resolver: zodResolver(userRegistro),
    });
    const onSubmit = (data: IRegistroUsuario) => {
        data.tipo = "usuario";
        console.log(data);

    }
    return (
        <section className="w-[380px] h-[650px] flex flex-col items-center justify-evenly shadow-xl rounded-lg">
            <div className="flex flex-col gap-5">
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
                <button onClick={() => handleSubmit(onSubmit)()} className="w-[281px] h-10 rounded-lg bg-primary text-white">Criar Conta</button>
            </div>
            <div className="flex gap-2 text-sm">
                <p>Já tem uma conta?</p>
                <a className="text-primary font-medium underline" href="#">Login</a>
            </div>
        </section>
    )
}
