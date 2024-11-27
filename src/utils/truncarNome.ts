export function truncarNome(nome: string): string {
    if (nome.length > 10) {
        return nome.substring(0, 10) + '...';
    }
    return nome;
}