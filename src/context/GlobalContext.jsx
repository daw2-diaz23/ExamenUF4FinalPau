import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
 
    const [data, setData] = useState({ ticketsPendientes: [], ticketsResueltos: [] });

  
    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const responsePendientes = await fetch('https://jsonserver-examen.vercel.app/ticketsPendientes');
                const pendientes = await responsePendientes.json();
                
                const responseResueltos = await fetch('https://jsonserver-examen.vercel.app/ticketsResueltos');
                const resueltos = await responseResueltos.json();

              
                setData({ ticketsPendientes: pendientes, ticketsResueltos: resueltos });

                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <GlobalContext.Provider value={{ data, setData }}>
            {children}
        </GlobalContext.Provider>
    );
};
