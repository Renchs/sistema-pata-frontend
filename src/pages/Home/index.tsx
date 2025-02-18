// import { useState } from "react";
import { CardBeneficiosAdocao } from "../../components/cardBeneficiosAdocao";
import { CardPassoHome } from "../../components/cardIPassosHome";
// import { ModalLogin } from "../../components/modalLogin";
// import { ModalRegisterUser } from "../../components/modalRegisterUser";

export function Home() {
    // const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
    // const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
    // const isLogged = localStorage.getItem("token");

    // const toggleModal = () => {
    //     setIsOpenModalLogin(!isOpenModalLogin);
    //     setIsOpenModalRegister(!isOpenModalRegister);
    // }

    return (
        <section className="w-full min-h-screen justify-evenly bg-white items-center flex flex-col gap-9">
            {/* {isOpenModalLogin && <ModalLogin openModalRegister={() => toggleModal()} onClose={() => setIsOpenModalLogin(false)} />}
            {isOpenModalRegister && <ModalRegisterUser toggleModal={() => toggleModal()} onClose={() => setIsOpenModalRegister(false)} />} */}
            <div className="flex flex-col-reverse md:flex-row w-full justify-center md:justify-around h-[600px] items-center">
                <div className="lg:w-[440px] h-[294px] flex flex-col text-center lg:text-start justify-evenly">
                    <h1 className="text-4xl w-[300px] font-medium">Dê uma chance ao amor. <span className="text-primary">Adote!</span>
                    </h1>
                    <p className="w-[320px] lg:w-[380px]">Abandono de animais nas ruas é um problema real. Escolha adotar e dar a esses animais uma segunda chance. Faça a diferença, salve vidas.</p>
                    {/* {!isLogged && (
                        <div className="flex gap-8 lg:gap-12 justify-center lg:justify-start">
                            <button onClick={() => setIsOpenModalLogin(true)} className="w-32 lg:w-48 h-12 rounded-lg bg-primary text-white">Fazer Login</button>
                            <button onClick={() => setIsOpenModalRegister(true)} className="w-32 lg:w-48 h-12 rounded-lg border border-primary text-primary">Criar conta</button>
                        </div>
                    )} */}
                </div>
                <img className="w-80 lg:w-auto" src="/sistema-pata-frontend/assets/images/homeImg.png" alt="" />
            </div>
            <section className="w-[310px] md:w-[750px] xl:w-[1224px] lg:h-[448px] text-center md:text-start items-center justify-around flex flex-col">
                <div className="flex flex-col items-start md:items-center font-medium">
                    <h2 className="text-xl lg:text-2xl text-primary">Em três passos, seu novo amigo estará com você</h2>
                    <p className="text-lg lg:text-xl">Transforme uma vida com facilidade</p>
                </div>
                <div className="flex flex-col h-[1100px] md:h-[800px] gap-16 lg:gap-6 xl:gap-0 md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center">
                    <CardPassoHome numPassos={1} img="/sistema-pata-frontend/assets/images/groupAdd.png" text="Crie o seu perfil em alguns minutos." />
                    <img className="hidden xl:block" src="/sistema-pata-frontend/assets/svgs/Left.svg" alt="" />
                    <CardPassoHome numPassos={2} img="/sistema-pata-frontend/assets/images/dog.png" text="Acesse a lista de pets que estão cadastradas no nosso sistema." />

                    <img className="hidden xl:block" src="/sistema-pata-frontend/assets/svgs/Right.svg" alt="" />
                    <CardPassoHome numPassos={3} img="/sistema-pata-frontend/assets/images/group.png" text="Adote o seu Pet" />
                </div>
            </section>

            <section id="beneficios" className="items-center w-[350px] md:w-full text-center lg:text-start flex flex-col gap-12">
                <h2 className="text-2xl font-medium">A adoção traz <span className="text-primary">benefícios para todos!</span></h2>

                <div className="md:w-[750px] xl:w-[1069px] flex justify-center flex-wrap gap-[89px]">
                    <CardBeneficiosAdocao img="/sistema-pata-frontend/assets/images/apoio.png" titulo="Ajude outros" descricao="Diga sua experiência e inspire outros a adotar também, mostre amor por todos os lados." />
                    <CardBeneficiosAdocao img="/sistema-pata-frontend/assets/images/home.png" titulo="Cuide e ame" descricao="Leve seu novo amigo para casa, cuide com carinho e dê a ele o amor que ele merece." />
                    <CardBeneficiosAdocao img="/sistema-pata-frontend/assets/images/bone.png" titulo="Mude o mundo" descricao="Cada adoção muda vidas, tirando animais das ruas e garantindo um lar, comida e cuidados." />
                    <CardBeneficiosAdocao img="/sistema-pata-frontend/assets/images/smile.png" titulo="Ajude outros" descricao="Conheça pessoalmente o animal e veja se há uma conexão especial, sinta a magia da adoção." />

                    <CardBeneficiosAdocao img="/sistema-pata-frontend/assets/images/boxDog.png" titulo="Escolha um novo amigo" descricao="Explore a lista de animais em busca de um lar, e escolha o amigo perfeito para você." />
                    <CardBeneficiosAdocao img="/sistema-pata-frontend/assets/images/message.png" titulo="Suporte" descricao="Oferecemos suporte online 24/7 para garantir que todas as suas perguntas sejam atendidas." />
                </div>
            </section>
            <section id="quem_somos" className="w-[350px] md:w-[700px] lg:w-[900px] xl:w-[1168px] h-[800px] xl:h-[485px] flex">
                <div className="flex flex-col items-center xl:flex-row gap-4 font-medium">
                    <img className="w-80 lg:w-[450px] xl:w-full" src="/sistema-pata-frontend/assets/images/adoptionIlustration.png" alt="" />
                    <div className="w-[full]  flex flex-col items-center text-center xl:text-start xl:items-start justify-center gap-8">
                    <h2 className="text-3xl">Quem somos?</h2>
                        <p className="text-xl">Nosso objetivo é criar um caminho seguro e acessível para animais encontrem lares amorosos e permanentes. Sabemos que cada animal merece um lugar para chamar de lar e alguém que cuide deles com carinho</p>
                        <p className="text-xl">AdotaPet - <span className="text-primary">Transformando</span> vidas.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
