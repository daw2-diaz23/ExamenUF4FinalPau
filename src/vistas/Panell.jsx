import React from 'react';
import TablaPendientes from '../component/TablaPendientes';
import TablaResueltos from '../component/TablaResueltos';
import 'bootstrap/dist/css/bootstrap.min.css';

const Panel = () => {
  return (
    <div className='container mt-5'>
      <h1 className="text-center">Administración de incidencias</h1>
      <div className="mt-5">
        <TablaPendientes />
      </div>
      <div className="mt-5">
        <TablaResueltos />
      </div>
    </div>
  );
};

export default Panel;
