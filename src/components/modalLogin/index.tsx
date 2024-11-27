import { useForm } from "react-hook-form";
import { CampoInput } from "../campoInput";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { userLogin } from "../../schemas/usuarioValidacao";
import { api } from "../../services/apiService";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

interface ILoginUsuario {
    email: string;
    senha: string;
}

interface IModalLogin {
    onClose: () => void;
}

interface IResponseLogin {
    token: string;
    usuario: {
        id: number;
        nome: string;
        email: string;
        tipo: string;
        telefone: string;
    }
}

export function ModalLogin({ onClose }: IModalLogin) {
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginUsuario>({
        resolver: zodResolver(userLogin)
    });
    const onLoginSubmit = async (data: ILoginUsuario) => {
        try {
            const result = await api.post<IResponseLogin>('/login', data);
            localStorage.setItem('authToken', result.data.token);
            onClose();
        } catch (error) {
            const err = error as AxiosError;
            const { message } = err.response?.data as { message: string };
            toast.error(message || "Ocorreu um erro ao tentar fazer login")
        }        
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <section className="relative w-[329px] h-[350px] flex flex-col items-center justify-evenly shadow-xl rounded-lg bg-white">
                {/* Botão para fechar o modal */}
                <button
                    onClick={onClose} // Função que controla o fechamento
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    aria-label="Fechar Modal"
                >
                    ✖
                </button>

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
                    <button type="submit" className="w-[281px] h-10 rounded-lg bg-primary text-white">
                        Entrar
                    </button>
                </form>

                <div className="flex gap-2 text-sm">
                    <p>Ainda não tem uma conta?</p>
                    <a className="text-primary font-medium underline" href="#">
                        Criar conta
                    </a>
                </div>
            </section>
        </div>
    )
}
