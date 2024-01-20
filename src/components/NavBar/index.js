import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Lista de Clientes</Link>
        </li>
        <li>
          <Link to="/cadastro">Cadastrar Cliente</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
