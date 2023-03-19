import { useContext, useEffect, useState } from "react";

import { CoffeesLitsContext } from "../contexts/CoffeesLitsContext";

export function useCountCart() {
  const [count, setCount] = useState({ quantity: 0 });
  const { cart } = useContext(CoffeesLitsContext);

  useEffect(() => {
    const quantityOfItems = cart.reduce(
      (acc, items) => {
        acc.quantity += items.quantity;

        return acc;
      },

      {
        quantity: 0,
      }
    );

    setCount(quantityOfItems);
  }, [cart]);

  return count.quantity;
}
