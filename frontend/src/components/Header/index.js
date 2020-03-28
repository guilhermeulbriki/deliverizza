import React from "react";

import "./style.css";
import logoImg from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Deliveizza" />
    </header>
  );
}
