import React from 'react';
import './styles.scss';

const OptimizeRouteTable = ({ clients }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>ID</th>
            <th>X</th>
            <th>Y</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.id}</td>
              <td>{client.x_coordinate}</td>
              <td>{client.y_coordinate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OptimizeRouteTable;
