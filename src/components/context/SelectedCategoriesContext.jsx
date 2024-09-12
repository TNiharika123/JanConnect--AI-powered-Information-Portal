import React, { createContext, useState } from 'react';

export const SelectedCategoriesContext = createContext();

export const SelectedCategoriesProvider = ({ children }) => {
    const [selectedCategories, setSelectedCategories] = useState(['default category']); // Default value for testing

    return (
        <SelectedCategoriesContext.Provider value={{ selectedCategories, setSelectedCategories }}>
            {children}
        </SelectedCategoriesContext.Provider>
    );
};
  