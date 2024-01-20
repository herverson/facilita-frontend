import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClientFilterProvider } from '../src/stores/ClientFilterContext';
import ClientList from './components/ClientList';
import ClientFormPage from './pages/ClientFormPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <ClientFilterProvider>
      <Router>
        <div className="App">
          <NavBar />

          <Routes>
            <Route path="/" element={<ClientList />} />
            <Route path="/cadastro" element={<ClientFormPage />} />
          </Routes>
        </div>
      </Router>
    </ClientFilterProvider>
  );
}

export default App;
