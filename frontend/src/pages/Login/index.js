import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

import api from '../../services/api';

import Input from '../../components/InputForm';
import { Container } from './style';

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
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          icon={FiMail}
          type="text"
          placeholder="Email"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="submit btn-submit"
          type="submit"
        >Login</button>
        <Link to="/senha" className="senha" >Esqueci minha senha</Link>
        <Link to="/register" className="cadastro" >Cadastrar-se</Link>
      </form>
    </Container>
  );
}
