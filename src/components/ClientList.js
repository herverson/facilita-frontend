import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/clients').then((response) => {
      setClients(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name} - X: {client.x_coordinate}, Y: {client.y_coordinate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;
