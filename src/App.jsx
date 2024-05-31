// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Register from './vistas/Registre';
import Login from './vistas/Login';
import Panel from './vistas/Panell';
import {  GlobalProvider } from './context/GlobalContext';

const App = () => {
  return (
    
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </Router>
    </GlobalProvider>
    
  );
};

export default App;
