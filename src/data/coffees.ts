import expressoTradicional from "../assets/coffes_types/expresso_tradicional.svg";
import expressoAmericano from "../assets/coffes_types/expresso_americano.svg";
import expressoCremoso from "../assets/coffes_types/expresso_cremoso.svg";
import expressoGelado from "../assets/coffes_types/expresso_gelado.svg";
import cafeComLeite from "../assets/coffes_types/cafe_com_leite.svg";
import mocaccino from "../assets/coffes_types/mocaccino.svg";
import latte from "../assets/coffes_types/latte.svg";
import cappucino from "../assets/coffes_types/capuccino.svg";
import macchiato from "../assets/coffes_types/macchiato.svg";
import chocolateQuente from "../assets/coffes_types/chocolate_quente.svg";
import cubano from "../assets/coffes_types/cubano.svg";
import havaiano from "../assets/coffes_types/havaiano.svg";
import arabe from "../assets/coffes_types/arabe.svg";
import irlandes from "../assets/coffes_types/irlandes.svg";

export interface CoffeesProps {
  img: string;
  tags: ("TRADICIONAL" | "GELADO" | "COM LEITE" | "ESPECIAL" | "ALCOÓLICO")[];
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export const coffeesList: CoffeesProps[] = [
  {
    img: expressoTradicional,
    tags: ["TRADICIONAL"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    quantity: 0,
  },
  {
    img: expressoAmericano,
    tags: ["TRADICIONAL"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    quantity: 0,
  },
  {
    img: expressoCremoso,
    tags: ["TRADICIONAL"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    quantity: 0,
  },
  {
    img: expressoGelado,
    tags: ["TRADICIONAL", "GELADO"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    quantity: 0,
  },
  {
    img: cafeComLeite,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    quantity: 0,
  },
  {
    img: latte,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    quantity: 0,
  },
  {
    img: cappucino,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    quantity: 0,
  },
  {
    img: macchiato,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    quantity: 0,
  },
  {
    img: mocaccino,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    quantity: 0,
  },
  {
    img: chocolateQuente,
    tags: ["ESPECIAL", "COM LEITE"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    quantity: 0,
  },
  {
    img: cubano,
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    quantity: 0,
  },
  {
    img: havaiano,
    tags: ["ESPECIAL"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    quantity: 0,
  },
  {
    img: arabe,
    tags: ["ESPECIAL"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    quantity: 0,
  },
  {
    img: irlandes,
    tags: ["ESPECIAL", "ALCOÓLICO"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    quantity: 0,
  },
];
