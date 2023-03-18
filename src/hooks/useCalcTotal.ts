import { useContext, useEffect, useState } from "react";
import { CoffeesLitsContext } from "../contexts/CoffeesLitsContext";

export function useCaclTotal() {
  const { cart } = useContext(CoffeesLitsContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function updateTotal() {
      const total = cart.reduce((acc, item) => {
        const itemTotal = item.quantity * item.price;
        return acc + itemTotal;
      }, 0);

      return total;
    }

    const total = updateTotal();

    const totalPurchase = total + 3.5;

    setTotal(totalPurchase);
  }, [cart]);

  return total;
}
