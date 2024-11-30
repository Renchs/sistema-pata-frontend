export interface IPetDados {
    id: number;
    nome: string;
    especie: string;
    adotado?: boolean; 
    data_nascimento: string;
    personalidade: "calmo"|"brincalhao"|"independente";
    descricao: string;
    tamanho: "pequeno"|"medio"|"grande";
}