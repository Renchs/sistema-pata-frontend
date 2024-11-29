export function calcularIdade(dataNascimento: string) {

    const dataNascimentoObj = new Date(dataNascimento)

    const dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();

    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();
    const mes = dataNascimentoObj.getMonth() + 1;
    const dia = dataNascimentoObj.getDate();

    if (mesAtual < mes - 1 || (mesAtual === mes - 1 && diaAtual < dia)) {
        idade--;
    }

    return idade;
}