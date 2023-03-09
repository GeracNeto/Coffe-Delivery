import { createContext, ReactNode, useState } from "react";
import { CoffeesProps, coffeesList } from "../data/coffees";

interface CoffeesContextProps {
  coffeesList: CoffeesProps[];
  updateCoffeesList: (newList: CoffeesProps[]) => void;
}

export const CoffeesLitsContext = createContext<CoffeesContextProps>({
  coffeesList,
  updateCoffeesList: () => {},
});

interface CoffeesLitsContextProps {
  children: ReactNode;
}

export function CoffeesLitsContextProvider({
  children,
}: CoffeesLitsContextProps) {
  const [coffeesListCart, setCoffeesListCart] =
    useState<CoffeesProps[]>(coffeesList);

  function updateCoffeesList(newList: CoffeesProps[]) {
    setCoffeesListCart(newList);
  }

  return (
    <CoffeesLitsContext.Provider
      value={{ coffeesList: coffeesListCart, updateCoffeesList }}
    >
      {children}
    </CoffeesLitsContext.Provider>
  );
}
