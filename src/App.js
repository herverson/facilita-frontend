import React from 'react';
import { ClientFilterProvider } from '../src/stores/ClientFilterContext';

import ClientList from './components/ClientList';
import OptimizeRouteButton from './components/OptimizeRouteButton';

function App() {
  return (
    <ClientFilterProvider>
      <div className="App">
        <ClientList />
        <OptimizeRouteButton />
      </div>
    </ClientFilterProvider>
  );
}

export default App;
