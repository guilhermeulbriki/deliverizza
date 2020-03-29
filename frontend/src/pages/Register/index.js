import React from 'react';
import { } from 'react-icons/fi';

import './styles.css';

export default function Register() {
  return (
    <div className="register-container">
      <section className="personal-informations">
        <div className="header">
          <h1>Bem vindo(a) ao Deliverizza!</h1>
          <h2>Antes de começar a cadastrar sua pizzaria,
          precisamos de algumas informações para que seja possível o seu login em nosso sistema e futuras comunicações.
          </h2>
        </div>
        <section className="content">
          <section className="name">
            <div className="text">
              <h3>Diga o nome de sua pizzaria</h3>
              <h4>(ele também será usado para entrar no sistema)</h4>
            </div>
            <input type="text" name="name" />
          </section>
          <section className="password">
            <div className="text">
              <h3>Digite uma senha</h3>
              <h4>(ela também será usada para entrar no sistema)</h4>
            </div>
            <input type="password" name="password" />
          </section>
          <section className="whatsapp">
            <div className="text">
              <h3>Por fim, qual o número do WhatsApp da pizzaria?</h3>
              <h4>(Caso não tenha, deixe em branco)</h4>
            </div>
            <input type="password" name="password" />
          </section>
        </section>
      </section>
      <hr />
      <section className="menu">
        <h2>Agora vamos cadastrar o cardápio de sua pizzaria</h2>
        <section className="sizePizza">
          <div className="content"></div>

        </section>
        <section className="flavorsPizza"></section>
        <section className="flavorsEdge"></section>
        <section className="drinks"></section>
      </section>
    </div>
  );
}
