interface ICardBeneficiosAdocao {
  img: string;
  titulo: string;
  descricao: string;
}
export function CardBeneficiosAdocao({ titulo, descricao, img }: ICardBeneficiosAdocao) {
  return (
    <div className="w-[297px] h-64 flex flex-col items-center justify-center border border-primary text-center rounded-lg p-4 gap-5">
      <div className="flex flex-col items-center gap-4">
        <img src={img} alt="" />
        <h5 className="text-primary font-bold text-xl">{titulo}</h5>
      </div>
      <p>{descricao}</p>
    </div>
  )
}
