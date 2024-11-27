export function Footer() {
    return (
        <footer className="w-full flex flex-col justify-center gap-4 h-[700px] lg:h-[302px] bg-[#FBFBFB]">
            <div className="flex flex-col items-center justify-evenly md:justify-center lg:justify-around md:gap-7 lg:gap-0 md:flex-row md:flex-wrap h-full">
                <div className="w-[305px] text-xl flex flex-col h-36 gap-3">
                    <p>Como pode nos ajudar?</p>
                    <p className="text-primary text-lg">Adote um pet</p>
                    <p className="text-primary text-lg">Contribua para o projeto</p>
                </div>
                <div className="w-[305px] flex flex-col h-36 gap-3">
                    <p className="text-xl">Onde pode nos encontrar</p>
                    <div className="flex gap-3">
                        <img src="/src/assets/svgs/location.svg" alt="localização" />
                        <p>12 Rua Sol, SP, Brasil</p>
                    </div>
                    <div className="flex gap-3">
                        <img src="/src/assets/svgs/call.svg" alt="Numero de telefone" />
                        <p>+55 (11) 91234-5678</p>
                    </div>
                    <div className="flex gap-3">
                        <img src="/src/assets/svgs/email.svg" alt="Email para contato" />
                        <p>adotapetsuporte@gmail.com</p>
                    </div>
                </div>
                <div className="w-[305px] flex flex-col gap-4 h-36 justify-between">
                    <div className="flex flex-col gap-1">
                        <p className="text-xl">Como tudo começou</p>
                        <p className="w-[305px] text-lg">O projeto se originou a partir de uma inicativa do Instituto Atlântico em 2024.</p>
                    </div>
                    <div className="w-full flex gap-3">
                        <a className="w-40 h-10 flex text-primary bg-white border-primary border items-center justify-center rounded-lg" href="#">Sobre o Instituto</a>
                        <a className="w-40 h-10 flex text-primary bg-white border-primary border items-center justify-center rounded-lg" href="#">Avalia o projeto</a>
                    </div>
                </div>
            </div>
            <div className="flex p-4 bg-primary h-40 sm:h-20 items-center justify-center">
                <div className="flex sm:flex-row flex-col gap-8 sm:gap-0 w-[90%] items-center justify-between">
                    <p className="text-sm text-white">Todos os direitos reservados © 2024 Adotapets</p>
                    <div className="flex justify-between w-36">
                        <img src="/src/assets/svgs/facebook.svg" alt="Link para o facebook" />
                        <img src="/src/assets/svgs/github.svg" alt="Link para o github" />
                        <img src="/src/assets/svgs/instagram.svg" alt="Link para o instagram" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
