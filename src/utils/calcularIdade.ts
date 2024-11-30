export function calcularIdade(dataNascimento: string): string {
    const dataNascimentoObj = new Date(dataNascimento);
    const dataAtual = new Date();

    const anoNascimento = dataNascimentoObj.getFullYear();
    const mesNascimento = dataNascimentoObj.getMonth();
    const diaNascimento = dataNascimentoObj.getDate();

    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth();
    const diaAtual = dataAtual.getDate();

   
    let anos = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        anos--;
    }

    if (anos < 1) {
        let meses = mesAtual - mesNascimento;

        if (meses < 0) {
            meses += 12; 
        }

        return `${meses} meses`;
    }

    return `${anos} anos`;
}
