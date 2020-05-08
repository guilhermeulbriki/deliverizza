import React from "react";

import DeliveriLogo from '../../assets/images/logo-deliverizza.svg';

import { HeaderContainer } from './style';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={DeliveriLogo} alt="Deliveizza" />
    </HeaderContainer>
  );
}
