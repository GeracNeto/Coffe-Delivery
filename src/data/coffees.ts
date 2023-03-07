import expressoTradicional from "../assets/coffes_types/expresso_tradicional.svg";

export interface CoffeesProps {
  img: string;
  tag: "TRADICIONAL" | "GELADO" | "COM LEITE" | "ESPECIAL" | "ALCOÓLICO";
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export const coffees: CoffeesProps[] = [
  {
    img: expressoTradicional,
    tag: "TRADICIONAL",
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantity: 0,
  },
];
