import { createContext, ReactNode } from "react";

import { CoffeesProps, coffeesList } from "../data/coffees";

interface CoffeesContextProps {
  coffeeList: CoffeesProps[];
}

export const CoffeesLitsContext = createContext({} as CoffeesProps[]);

interface CoffeesLitsContextProps {
  children: ReactNode;
}
export function CoffeesLitsContextProvider({
  children,
}: CoffeesLitsContextProps) {
  return (
    <CoffeesLitsContext.Provider value={coffeesList}>
      {children}
    </CoffeesLitsContext.Provider>
  );
}
