import React, { createContext, useState } from 'react';
import { bd } from '../bd/bd';

// Creamos el GlobalContext
export const GlobalContext = createContext();


export const GlobalProvider = ({ children }) => {
    // Esto es para inicilizar la base de datos
    const [data, setData] = useState(bd);

    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {children}
        </GlobalContext.Provider>
    );
};
