import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

import "./style.css";
import api from '../../services/api';

export default function FormLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('session/pizzaria', { name });
      localStorage.setItem('pizzariaName', name);
      localStorage.setItem('pizzariaID', response.data.id);
      history.push('/orders');
    } catch {
      alert('Falha no login, confira os campos e tente novamente.');
    }
  }

  return (
    <form onSubmit={handleSubmit} id="login" >
      <input
        className="login"
        name="nome"
        type="text"
        placeholder="login"
        required
        value={name}
        onChange={e => setName(e.target.value)}
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
      <button
        className="submit btn-submit"
        type="submit"
      >Login</button>
      <Link to="/senha" name="senha" >Esqueci minha senha</Link>
      <Link to="/cadastro" className="cadastro" >Cadastrar-se</Link>
    </form >
  );
}
