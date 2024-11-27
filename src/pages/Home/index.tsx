import { CardBeneficiosAdocao } from "../../components/cardBeneficiosAdocao";
import { CardPassoHome } from "../../components/cardIPassosHome";

export function Home() {
    return (
        <section className="w-full min-h-screen justify-evenly bg-white items-center flex flex-col gap-9">
            <div className="flex flex-col-reverse lg:flex-row w-full justify-center lg:justify-around h-[600px] items-center">
                <div className="w-[350px] lg:w-[440px] h-[294px] flex flex-col lg:items-start justify-evenly">
                    <h1 className="text-4xl w-[300px] font-medium">Dê uma chance ao amor. <span className="text-primary">Adote!</span>
                    </h1>
                    <p className="w-[320px] lg:w-[380px]">Abandono de animais nas ruas é um problema real. Escolha adotar e dar a esses animais uma segunda chance. Faça a diferença, salve vidas.</p>
                    <div className="flex gap-8 lg:gap-12 justify-center lg:justify-start">
                        <button className="w-32 lg:w-48 h-12 rounded-lg bg-primary text-white">Fazer Login</button>
                        <button className="w-32 lg:w-48 h-12 rounded-lg border border-primary text-primary">Criar conta</button>
                    </div>
                </div>
                <img className="w-80 lg:w-full" src="/src/assets/images/homeImg.png" alt="" />
            </div>
            <section className="w-[350px] xl:w-[1224px] lg:h-[448px] items-center justify-around flex flex-col">
                <div className="flex flex-col items-start lg:items-center font-medium">
                    <h2 className="text-xl lg:text-2xl text-primary">Em três passos, seu novo amigo estará com você</h2>
                    <p className="text-lg lg:text-xl">Transforme uma vida com facilidade</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <CardPassoHome numPassos={1} img="/src/assets/images/groupAdd.png" text="Crie o seu perfil em alguns minutos." />
                    <img src="/src/assets/svgs/Right.svg" alt="" />
                    <CardPassoHome numPassos={2} img="/src/assets/images/dog.png" text="Acesse a lista de pets que estão cadastradas no nosso sistema." />
                    <img src="/src/assets/svgs/Left.svg" alt="" />
                    <CardPassoHome numPassos={3} img="/src/assets/images/group.png" text="Adote o seu Pet" />
                </div>
            </section>

            {/* <section className="items-center flex flex-col gap-12">
                <h2 className="text-2xl font-medium">A adoção traz <span className="text-primary">benefícios para todos!</span></h2>

                <div className="w-[1069px] flex flex-wrap gap-[89px]">
                    <CardBeneficiosAdocao img="/src/assets/images/apoio.png" titulo="Ajude outros" descricao="Diga sua experiência e inspire outros a adotar também, mostre amor por todos os lados." />
                    <CardBeneficiosAdocao img="/src/assets/images/home.png" titulo="Cuide e ame" descricao="Leve seu novo amigo para casa, cuide com carinho e dê a ele o amor que ele merece." />
                    <CardBeneficiosAdocao img="/src/assets/images/bone.png" titulo="Mude o mundo" descricao="Cada adoção muda vidas, tirando animais das ruas e garantindo um lar, comida e cuidados." />
                    <CardBeneficiosAdocao img="/src/assets/images/smile.png" titulo="Ajude outros" descricao="Conheça pessoalmente o animal e veja se há uma conexão especial, sinta a magia da adoção." />
                    
                    <CardBeneficiosAdocao img="/src/assets/images/smile.png" titulo="Escolha um novo amigo" descricao="Explore a lista de animais em busca de um lar, e escolha o amigo perfeito para você." />
                    <CardBeneficiosAdocao img="/src/assets/images/message.png" titulo="Suporte" descricao="Oferecemos suporte online 24/7 para garantir que todas as suas perguntas sejam atendidas." />
                </div>
            </section>
            <section className="w-[1168px] h-[485px] flex">
                <div className="flex  gap-4 font-medium">
                    <img src="/src/assets/images/adoptionIlustration.png" alt="" />
                    <div className="flex flex-col items-start justify-center gap-8">
                        <h2 className="text-3xl">Quem somos?</h2>
                        <p className="text-xl">Nosso objetivo é criar um caminho seguro e acessível para animais encontrem lares amorosos e permanentes. Sabemos que cada animal merece um lugar para chamar de lar e alguém que cuide deles com carinho</p>
                        <p className="text-xl">AdotaPet - <span className="text-primary">Transformando</span> vidas.</p>
                    </div>
                </div>
            </section> */}
        </section>
    )
}
