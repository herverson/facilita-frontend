import React, { createContext, useContext, useState } from 'react';

const ClientFilterContext = createContext();

export const ClientFilterProvider = ({ children }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [phoneFilter, setPhoneFilter] = useState('');

  const updateNameFilter = (newFilter) => {
    setNameFilter(newFilter);
  };

  const updateEmailFilter = (newFilter) => {
    setEmailFilter(newFilter);
  };

  const updatePhoneFilter = (newFilter) => {
    setPhoneFilter(newFilter);
  };

  return (
    <ClientFilterContext.Provider value={{ nameFilter, updateNameFilter, emailFilter, updateEmailFilter, phoneFilter, updatePhoneFilter }}>
      {children}
    </ClientFilterContext.Provider>
  );
};

export const useClientFilter = () => {
  const context = useContext(ClientFilterContext);
  if (!context) {
    throw new Error('useClientFilter must be used within a ClientFilterProvider');
  }
  return context;
};
