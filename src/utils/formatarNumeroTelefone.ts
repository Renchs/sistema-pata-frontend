export function formatarNumeroTelefone(numeroTelefone: string): string {
    const cleaned = numeroTelefone.replace(/\D/g, "");

    if (cleaned.length === 11) {
        return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`;
    }

    return numeroTelefone; 
}
