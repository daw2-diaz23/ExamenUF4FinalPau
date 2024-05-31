import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const TablaResueltos = () => {
    const { data } = useContext(GlobalContext);
    const { ticketsResueltos } = data;

    return (
        <div className="mt-5">
            <h2>Tickets Resueltos</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Código</th>
                        <th>Fecha</th>
                        <th>Fecha Resuelto</th>
                        <th>Aula</th>
                        <th>Grupo</th>
                        <th>Ordenador</th>
                        <th>Descripción</th>
                        <th>Alumno</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketsResueltos.map(ticket => (
                        <tr key={ticket.codigo}>
                            <td>{ticket.codigo}</td>
                            <td>{ticket.fecha}</td>
                            <td>{ticket.fecha_resuelto}</td>
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

export default TablaResueltos;
