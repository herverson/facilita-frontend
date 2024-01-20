// src/App.js
import React from 'react';
import ClientList from './components/ClientList';
import OptimizeRouteButton from './components/OptimizeRouteButton';

function App() {
  return (
    <div className="App">
      <ClientList />
      <OptimizeRouteButton />
    </div>
  );
}

export default App;
