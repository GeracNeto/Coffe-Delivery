import { LocationCardStyled } from "./styles";

import { MapPin } from "phosphor-react";

export function Location() {
  return (
    <LocationCardStyled>
      <MapPin size={22} weight="fill" color="#8047F8" />
      <p>Porto alegre, RS</p>
    </LocationCardStyled>
  );
}
