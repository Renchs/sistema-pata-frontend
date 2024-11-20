export function formatarData(dataNascimento: string) {

    const [dia, mes, ano] = dataNascimento.split('-').map(num => parseInt(num, 10));


    const dataNascimentoObj = new Date(ano, mes - 1, dia); 

    const dataAtual = new Date();

    let idade = dataAtual.getFullYear() - dataNascimentoObj.getFullYear();

    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();

    if (mesAtual < mes - 1 || (mesAtual === mes - 1 && diaAtual < dia)) {
        idade--;
    }

    return idade;
}