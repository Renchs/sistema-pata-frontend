interface ICardHome {
    numPassos: number;
    img: string;
    text: string;
}
export function CardPassoHome({ text, img, numPassos }: ICardHome) {
    return (
        <div className="relative w-[266px] flex flex-col items-center justify-center border border-primary rounded-lg h-64 text-center gap-8">
            <span className="w-14 h-14 flex items-center justify-center rounded-full bg-primary absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold px-2">
                {numPassos}
            </span>
            <img src={img} />
            <p>{text}</p>
        </div>
    )
}
