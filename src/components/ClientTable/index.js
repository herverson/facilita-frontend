import React from 'react';
import './styles.scss';

const ClientTable = ({ clients }) => {
  return (
    <div className="table-container">
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
