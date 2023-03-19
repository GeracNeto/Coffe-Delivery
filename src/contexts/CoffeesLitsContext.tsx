import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeesProps, coffees } from "../data/coffees";

interface DeliveryDataProps {
  cep: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  uf: string;
  paymentForm: "credit-card" | "debit-card" | "money";
}

interface CoffeesContextProps {
  coffeesList: CoffeesProps[];
  cart: CoffeesProps[];
  deliveryData: DeliveryDataProps;

  sendDeliveryData: (data: DeliveryDataProps) => void;
  removeCoffee: (imgAsId: string) => void;
  handleQuantity: (imgAsId: string, query: string) => void;
}

interface CoffeesLitsContextProps {
  children: ReactNode;
}

// Creates a Context with coffees as initial value and empty Cart
export const CoffeesLitsContext = createContext({} as CoffeesContextProps);

export function CoffeesLitsContextProvider({
  children,
}: CoffeesLitsContextProps) {
  const [coffeesList, setCoffeesList] = useState(coffees);
  const [cart, setCart] = useState<CoffeesProps[]>([]);
  const [deliveryData, setDeliveryData] = useState<DeliveryDataProps>({
    cep: 0,
    city: "",
    complement: "",
    district: "",
    number: 0,
    paymentForm: "credit-card",
    street: "",
    uf: "",
  });

  /* This function receives img string and query: (add | sub) and returns a new array
     with quantities values updated
  */
  function handleQuantity(imgAsId: string, query: string) {
    const newCoffeesList = coffeesList.map((coffee) => {
      if (coffee.img === imgAsId && query === "add") {
        coffee.quantity += 1;
      } else if (
        coffee.img === imgAsId &&
        query === "sub" &&
        coffee.quantity !== 0
      ) {
        coffee.quantity -= 1;
      }
      return coffee;
    });
    setCoffeesList(newCoffeesList);
  }

  // This function removes a coffee when the user clicks on the remove button
  function removeCoffee(imgAsId: string) {
    const newList = coffeesList.map((coffee) => {
      if (coffee.img === imgAsId) {
        coffee.quantity = 0;
      }
      return coffee;
    });

    setCoffeesList(newList);
  }

  // This function saves delivery data in the deliveryData
  function sendDeliveryData(data: DeliveryDataProps) {
    setDeliveryData(data);
  }

  // This useEffect generates a CartList whenever the user add some coffee to the Cart
  useEffect(() => {
    function generateCartList() {
      const cartList = coffeesList.filter((coffee) => coffee.quantity !== 0);

      setCart(cartList);
    }

    generateCartList();
  }, [coffeesList]);

  return (
    <CoffeesLitsContext.Provider
      value={{
        coffeesList,
        handleQuantity,
        cart,
        removeCoffee,
        deliveryData,
        sendDeliveryData,
      }}
    >
      {children}
    </CoffeesLitsContext.Provider>
  );
}
