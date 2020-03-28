import React, { useState } from "react";
import { Link } from 'react-router-dom';

import "./style.css";
import api from '../../services/api';

export default function FormLogin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('session/user', {})
    } catch {
      alert('Falha no login, confira os campos e tente novamente.');
    }
  }

  return (
    <form onSubmit={handleSubmit} id="login">
      <input
        className="login"
        name="nome"
        placeholder="login"
        required
        value={login}
        onChange={e => setLogin(e.target.value)}
      />
      <input
        className="login"
        name="senha"
        type="password"
        placeholder="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        className="submit btn-submit"
        type="submit"
        value="Login"
      />
      <Link to="/senha" name="senha" >Esqueci minha senha</Link>
      <Link to="/cadastro" className="cadastro" >Cadastrar-se</Link>
    </form>
  );
}
