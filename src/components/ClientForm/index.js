import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

const ClientForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [xCoordinate, setXCoordinate] = useState('');
  const [yCoordinate, setYCoordinate] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newClient = {
      name,
      phone,
      email,
      x_coordinate: xCoordinate,
      y_coordinate: yCoordinate,
    };

    try {
      await axios.post('http://localhost:3001/clients', newClient);

      setName('');
      setPhone('');
      setEmail('');
      setXCoordinate('');
      setYCoordinate('');

      navigate('/');
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <div className="client-form-container">
      <h2>Cadastrar Cliente</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Telefone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Coordenada X:</label>
        <input type="text" value={xCoordinate} onChange={(e) => setXCoordinate(e.target.value)} required />

        <label>Coordenada Y:</label>
        <input type="text" value={yCoordinate} onChange={(e) => setYCoordinate(e.target.value)} required />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ClientForm;
