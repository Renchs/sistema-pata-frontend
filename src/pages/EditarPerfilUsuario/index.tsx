import { useContext, useEffect } from "react";
import { IUsuarioDados } from "../../interfaces/IUsuarioDados";
import { api } from "../../services/apiService";
import { useForm } from "react-hook-form";
import { IFormUserRegistro, userFormSchema } from "../../schemas/usuarioValidacao";
import toast from "react-hot-toast";
import { CampoInput } from "../../components/campoInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../auth/authContext";

export function EditarPerfil() {
  const id = localStorage.getItem("id");
  const auth = useContext(AuthContext);
  const { register, reset, handleSubmit, formState: { errors } } = useForm<IFormUserRegistro>({
    resolver: zodResolver(userFormSchema)
  });
  
  useEffect(() => {
    const editarUsuario = async () => {
      const result = await api.get<IUsuarioDados>(`/usuario/${id}`)
      reset({
        nome: result.data.nome,
        email: result.data.email,
        confirmarEmail: result.data.email,
        endereco: result.data.endereco,
        telefone: result.data.telefone,
        tipo: result.data.tipo as "usuario" | "administrador",
      });
    }
    editarUsuario();
  }, [id, reset])



  const onSubmit = async (data: IFormUserRegistro) => {
    await api.put(`/usuario/${id}`, data);
    toast.success("Usuário editado com sucesso!");
    reset();
    auth?.logout();
  }


  return (
    <div className="flex items-center justify-center">
      <section className="w-[350px] items-center bg-white rounded-md shadow-md">
        <form className="min-h-[700px] justify-evenly flex flex-col items-center">
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
            nomeLabel="Endereço"
            nomeRegistro="endereco"
            register={register}
            type="text"
            error={errors.endereco}
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

          <div className="flex gap-4 ">
            <button className="w-[100px] h-10 rounded-lg bg-white border border-primary text-primary" type="button" onClick={() => reset()}>
              Cancelar
            </button>
            <button className="w-[100px] h-10 rounded-lg bg-primary text-white" type="submit" onClick={handleSubmit(onSubmit)}>
              Editar
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
