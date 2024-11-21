import { z } from "zod";

export const nomePet = z.string().min(2, 'O nome deve ter pelo menos 2 caracteres').max(30, 'O nome do pet não pode ser superior a 30 caracteres');

export const especiePet = z.string().min(3, 'A raça do pet deve ter pelo menos 3 caracteres').max(40, 'O limite e de 40 caracteres');

export const descricaoPet = z.string().min(4, 'A descricao do pet deve ter pelo menos 4 caracteres').max(200, 'A descricao do pet deve ter menos de 200 caracteres');

export const tamanhoPet = z.enum(['pequeno', 'medio', 'grande'], {
    errorMap: () => ({ message: 'Por favor selecionar um tamanho válido.'})
});

export const personalidadePet = z.enum(['independente', 'calmo', 'brincalhao'], {
    errorMap: () => ({ message: 'Por favor selecionar uma personalidade válida.'})
});

export const dataNascimentoPet = z.string().regex(/^\d{2}-\d{2}-\d{4}$/, 'O formato da data deve ser dia-mês-ano').length(10, 'A data deve ter exatamente 10 caracteres');



export const petFormSchema = z.object({
    nome: nomePet,
    especie: especiePet,
    tamanho: tamanhoPet,
    personalidade: personalidadePet,
    descricao: descricaoPet,
    data_nascimento: dataNascimentoPet,
})

export type IFormPet = z.infer<typeof petFormSchema>;