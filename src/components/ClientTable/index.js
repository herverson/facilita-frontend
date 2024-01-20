import React from 'react';
import { useClientFilter } from '../../stores/ClientFilterContext';
import './styles.scss';

const ClientTable = ({ clients }) => {
  const { updateNameFilter, updateEmailFilter, updatePhoneFilter } = useClientFilter();

  const handleNameFilterChange = (event) => {
    updateNameFilter(event.target.value);
  };

  const handleEmailFilterChange = (event) => {
    updateEmailFilter(event.target.value);
  };

  const handlePhoneFilterChange = (event) => {
    updatePhoneFilter(event.target.value);
  };

  return (
    <div className="table-container">
      <input type="text" placeholder="Filtrar por nome" onChange={handleNameFilterChange} />
      <input type="text" placeholder="Filtrar por email" onChange={handleEmailFilterChange} />
      <input type="text" placeholder="Filtrar por phone" onChange={handlePhoneFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>X</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.phone}</td>
              <td>{client.email}</td>
              <td>{client.x_coordinate}</td>
              <td>{client.y_coordinate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
