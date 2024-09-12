// src/components/context/LocationProvider.jsx
import React, { useState } from 'react';
import LocationContext from './LocationContext';

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("");

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
