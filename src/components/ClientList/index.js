import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClientTable from '../ClientTable';
import { useClientFilter } from '../../stores/ClientFilterContext';

const ClientList = () => {
  const { nameFilter, emailFilter, phoneFilter } = useClientFilter();
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/clients').then((response) => {
      setClients(response.data);
    });
  }, []);

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
    client.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
    client.phone.toLowerCase().includes(phoneFilter.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Lista de Clientes</h2>
      <ClientTable clients={filteredClients} />
    </div>
  );
};

export default ClientList;
