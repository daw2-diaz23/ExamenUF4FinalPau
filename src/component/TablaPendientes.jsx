import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaPendientes = () => {
    const { data } = useContext(GlobalContext);
    const { ticketsPendientes } = data;

    return (
        <div className="mt-5">
            <h2>Tickets Pendientes</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketsPendientes.map(ticket => (
                        <tr key={ticket.codigo}>
                            <td>{ticket.codigo}</td>
                            <td>{ticket.fecha}</td>
                            <td>{ticket.aula}</td>
                            <td>{ticket.grupo}</td>
                            <td>{ticket.ordenador}</td>
                            <td>{ticket.descripcion}</td>
                            <td>{ticket.alumno}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaPendientes;