import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClientTable from './components/ClientTable';

const mockClients = [
  { id: 1, name: 'Client 1', phone: '123-456-7890', email: 'client1@example.com', x_coordinate: 10, y_coordinate: 20 },
  { id: 2, name: 'Client 2', phone: '987-654-3210', email: 'client2@example.com', x_coordinate: 30, y_coordinate: 40 },
];

test('renders ClientTable component with clients', () => {
  render(<ClientTable clients={mockClients} />);
  expect(screen.getByText('Client 1')).toBeInTheDocument();
  expect(screen.getByText('Client 2')).toBeInTheDocument();
});

test('renders the header correctly', () => {
  render(<ClientTable clients={mockClients} />);
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Phone')).toBeInTheDocument();
  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('X')).toBeInTheDocument();
  expect(screen.getByText('Y')).toBeInTheDocument();
});
