import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SelectedCategoryContext = createContext();
export const SelectedCategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Mountains")
  
  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
};

export const useSelectedCategoryValue = () => useContext(SelectedCategoryContext);

SelectedCategoryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
