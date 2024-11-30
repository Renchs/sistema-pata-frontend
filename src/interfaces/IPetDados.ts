export interface IPetDados {
    id: number;
    nome: string;
    especie: string;
    data_nascimento: string;
    personalidade: "calmo"|"brincalhao"|"independente";
    descricao: string;
    tamanho: "pequeno"|"medio"|"grande";
}