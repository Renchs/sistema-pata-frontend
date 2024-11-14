import { z } from "zod";

export const userRegistro = z.object({
    email: z.string().email("Digite um email válido").min(1, "Email é obrigatório"),
    confirmarEmail: z.string()
        .email("Digite um email válido")
        .min(1, "Confirme o email"),
    telefone: z.string().min(1, "Telefone é obrigatório").length(11, "O Telefone deve ter exatamente 11 caracteres."),
    senha: z.string().min(8, "Senha deve ter pelo menos 8 caracteres").min(1, "Senha é obrigatória").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Deve conter uma letra minúscula, uma letra maiúscula, um número e um caractere especial."),
    confirmarSenha: z.string().min(6, "Confirme sua senha").min(1, "Confirme a senha"),
}).refine((data) => data.email === data.confirmarEmail, {
    message: "Os emails não coincidem",
    path: ['confirmarEmail'],
}).refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ['confirmarSenha'],
});