
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Panel = () => {
  return (
    <div className='container mt-5'>
      <h1 className="text-center">Administración de incidencias</h1>
      <h2 className="mt-5 text-center">Tickets pendientes</h2>
      <div className="d-flex justify-content-center">
        <table className="table table-striped table-bordered table-hover mt-4 w-75">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123459</td>
              <td>18/04/2023</td>
              <td>T6</td>
              <td>DAW1</td>
              <td>PC3</td>
              <td>Error de impresora</td>
              <td>Ana Martínez</td>
              <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td>
                <button className="btn btn-warning" title="Añadir comentario">
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>123460</td>
              <td>19/04/2023</td>
              <td>T7</td>
              <td>DAW2</td>
              <td>PC4</td>
              <td>Problema de acceso a archivos</td>
              <td>Pablo Gómez</td>
              <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td>
                <button className="btn btn-warning" title="Añadir comentario">
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>123461</td>
              <td>20/04/2023</td>
              <td>T8</td>
              <td>DAW1</td>
              <td>PC5</td>
              <td>Ajuste de sonido inapropiado</td>
              <td>Sofía Fernández</td>
              <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td>
                <button className="btn btn-warning" title="Añadir comentario">
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>123462</td>
              <td>21/04/2023</td>
              <td>T9</td>
              <td>DAW1</td>
              <td>PC1</td>
              <td>Antivirus corrupto</td>
              <td>Carlos Ramírez</td>
              <td><button className="btn btn-success" title="Resolver ticket">Resolver</button></td>
              <td>
                <button className="btn btn-warning" title="Añadir comentario">
                  <i className="bi bi-pencil"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="mt-5 text-center">Tickets resueltos</h2>
      <div className="d-flex justify-content-center">
        <table className="table table-striped table-bordered table-hover mt-4 w-75">
          <thead>
            <tr>
              <th>Código</th>
              <th>Fecha</th>
              <th>Fecha resuelto</th>
              <th>Aula</th>
              <th>Grupo</th>
              <th>Ordenador</th>
              <th>Descripción</th>
              <th>Alumno</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123457</td>
              <td>16/04/2023</td>
              <td>15/05/2023</td>
              <td>T7</td>
              <td>DAW2</td>
              <td>PC1</td>
              <td>Problema de conexión a Internet</td>
              <td>Maria López</td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>123458</td>
              <td>17/04/2023</td>
              <td>16/05/2023</td>
              <td>T8</td>
              <td>DAW1</td>
              <td>PC2</td>
              <td>Pantalla en blanco</td>
              <td>Juan Rodríguez</td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>123459</td>
              <td>18/04/2023</td>
              <td>17/05/2023</td>
              <td>T9</td>
              <td>DAW1</td>
              <td>PC3</td>
              <td>Error de impresora</td>
              <td>Ana Martínez</td>
              <td>
                <button className="btn btn-info" title="Ver comentarios">
                  <i className="bi bi-chat-left-text"></i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket">
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Panel;
