import { useForm } from "react-hook-form";

interface ILoginUsuario {
    email: string;
    senha: string;
}

export function ModalLogin() {
    const { register, handleSubmit } = useForm<ILoginUsuario>();
    const onSubmit = (data: ILoginUsuario) => {
        console.log(data);

    }
    return (
        <section className="w-[329px] h-[344px] flex flex-col items-center justify-evenly shadow-xl rounded-lg">
            <div className="flex flex-col gap-5">
                <img className="w-[147px]" src="/src/assets/Logo.png" alt="AdotaPet" />
                <div className="flex flex-col gap-1">
                    <label>Email</label>
                    <input {...register("email")} className="w-[281px] text-sm p-3 h-[35px] border-2 rounded-lg border-primary" type="email" placeholder="Nome@exemplo.com" />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Senha</label>
                    <input {...register("senha")} className="w-[281px] text-sm p-3 h-[35px] border-2 rounded-lg border-primary" type="password" placeholder="********" />
                </div>
                <button onClick={() => handleSubmit(onSubmit)()} className="w-[281px] h-10 rounded-lg bg-primary text-white">Entrar</button>
            </div>
            <div className="flex gap-2 text-sm">
                <p>Ainda não em uma conta?</p>
                <a className="text-primary font-medium underline" href="#">Criar conta</a>
            </div>
        </section>
    )
}
