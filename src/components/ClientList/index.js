import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientTable from '../ClientTable';
import './styles.scss';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/clients').then((response) => {
      setClients(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Lista de Clientes</h2>
      <ClientTable clients={clients} />
    </div>
  );
};

export default ClientList;
