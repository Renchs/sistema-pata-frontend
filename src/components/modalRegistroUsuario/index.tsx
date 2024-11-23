import { CampoInput } from "../campoInput";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { userFormSchema } from "../../schemas/usuarioValidacao";
import { useState } from "react";
import { useForm } from "react-hook-form";


export interface IRegistroUsuario {
    nome: string;
    email: string;
    confirmarEmail: string;
    senha: string;
    confirmarSenha: string;
    telefone: string;
    tipo: "usuario" | "administrador";
}

export function ModalRegistro() {
    const [selectTipoUsuariom, setSelectTipoUsuario] = useState<"usuario" | "administrador">("usuario")
    const { register, handleSubmit, formState: { errors } } = useForm<IRegistroUsuario>({ resolver: zodResolver(userFormSchema), });


    const handleChangeTipoUsuario = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectTipoUsuario(event.target.value as 'usuario' | 'administrador');
    }

    const onRegistroSubmit = (data: IRegistroUsuario) => {
        data.tipo = selectTipoUsuariom;
        console.log(data);
    }


    return (
        <section className="w-[380px] h-[780px] flex flex-col items-center justify-evenly shadow-xl rounded-lg">
            <form onSubmit={handleSubmit(onRegistroSubmit)} className="flex flex-col gap-5">
                <img className="w-[147px]" src="/src/assets/Logo.png" alt="AdotaPet" />
                <CampoInput
                    nomeLabel="Nome"
                    nomeRegistro="nome"
                    register={register}
                    placeholder="Jhon doe"
                    type="text"
                    error={errors.email}
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


                <select onChange={handleChangeTipoUsuario} required className="focus:outline-none">
                    <option disabled selected value="">Tipo de Registro</option>
                    <option value="usuario">Usuário</option>
                    <option value="administrador">Administrador</option>
                </select>

                <button type="submit" className="w-[281px] h-10 rounded-lg bg-primary text-white">Criar Conta</button>
            </form>
            <div className="flex gap-2 text-sm">
                <p>Já tem uma conta?</p>
                <a className="text-primary font-medium underline" href="#">Login</a>
            </div>
        </section>
    )
}
