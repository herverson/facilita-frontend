import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import OptimizeRouteTable from '../OptimizeRouteTable';
import './styles.scss'

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
      <button onClick={handleOptimizeRoute} className="optimize-route-button">Otimizar Rota</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Ordem de Visitação</h2>
        <OptimizeRouteTable clients={optimizedRoute} />
        <button onClick={closeModal} className="optimize-route-button">Fechar</button>
      </Modal>
    </div>
  );
};

export default OptimizeRouteButton;
