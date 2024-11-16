import { useForm } from "react-hook-form";
import { CampoInput } from "../campoInput";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { userLogin } from "../../schemas/usuarioValidacao";

interface ILoginUsuario {
    email: string;
    senha: string;
}

export function ModalLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginUsuario>({
        resolver: zodResolver(userLogin)
    });
    const onLoginSubmit = (data: ILoginUsuario) => {
        console.log(data);

    }
    return (
        <section className="w-[329px] h-[350px] flex flex-col items-center justify-evenly shadow-xl rounded-lg bg-white">
            <form onSubmit={handleSubmit(onLoginSubmit)} className="flex flex-col gap-5">
                <img className="w-[147px]" src="/src/assets/Logo.png" alt="AdotaPet" />
                <CampoInput
                    nomeLabel="Email"
                    nomeRegistro="email"
                    register={register}
                    type="email"
                    placeholder="Nome@exemplo.com"
                    error={errors.email}
                />
                <CampoInput
                    nomeLabel="Senha"
                    nomeRegistro="senha"
                    register={register}
                    type="password"
                    placeholder="********"
                    error={errors.senha}
                />
                <button type="submit" className="w-[281px] h-10 rounded-lg bg-primary text-white">Entrar</button>
            </form>
            <div className="flex gap-2 text-sm">
                <p>Ainda não em uma conta?</p>
                <a className="text-primary font-medium underline" href="#">Criar conta</a>
            </div>
        </section>
    )
}
