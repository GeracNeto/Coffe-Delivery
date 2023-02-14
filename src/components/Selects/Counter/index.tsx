import { Minus, Plus } from "phosphor-react";
import { CounterStyled } from "./styles";

export function Counter() {
  return (
    <CounterStyled>
      <Minus size={14} color="#8047F8" />
      <p>1</p>
      <Plus size={14} color="#8047F8" />
    </CounterStyled>
  );
}
