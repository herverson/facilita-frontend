import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const OptimizeRouteButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [optimizedRoute, setOptimizedRoute] = useState([]);

  const handleOptimizeRoute = () => {
    axios.get('http://localhost:3001/optimize-route').then((response) => {
      setOptimizedRoute(response.data);
      setModalIsOpen(true);
    });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOptimizeRoute}>Otimizar Rota</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Ordem de Visitação</h2>
        <ul>
          {optimizedRoute.map((client) => (
            <li key={client.id}>
              {`Cliente ${client.name}: X ${client.x_coordinate}, Y ${client.y_coordinate}`}
            </li>
          ))}
        </ul>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
};

export default OptimizeRouteButton;
