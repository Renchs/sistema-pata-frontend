import data from "../images.json";

type ImagensPet = {
    gato: string;
    cachorro: string;
    hamster: string;
    coelho: string;
    cobra: string;
    peixe: string;
};

export const getImagemPet = (palavra: string): string => {
    if (palavra in data.images) {
        return data.images[palavra as keyof ImagensPet];
    }
    return "https://cdn-icons-png.flaticon.com/512/3460/3460335.png"; 
};