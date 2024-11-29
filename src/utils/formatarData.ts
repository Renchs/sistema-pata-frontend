export function formatarData(data: string) {

    const dataObj = new Date(data);

    const ano = dataObj.getFullYear();
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const dia = String(dataObj.getDate()).padStart(2, '0'); 

    return `${dia}-${mes}-${ano}`;
}