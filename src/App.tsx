import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home';
import Administration from './Components/Administration/Administration';
import Header from './Components/Header/Header';
import { LoginModal } from './Components/Login/LoginModal';
import { UserProvider } from './Context/UserContext';
import CrearAsesor from './Components/Administration/Crear/CrearAsesor';
import CrearCliente from './Components/Administration/Crear/CrearCliente';
import Footer from './Components/Footer/Footer';
import Periodos from './Components/Periodos/Periodos';
import Periodo from './Components/Periodos/Periodo';
import Liquidaciones from './Components/Liquidaciones/Liquidaciones';

function App() {
  const [loginModal, setLoginModal] = useState(false)

  const setLoginOn = () => {
    setLoginModal(true)
  }

  const closeModal = () => {
    setLoginModal(false)
  }
  return (
    <UserProvider>
      <BrowserRouter>
        <Header setLoginOn={setLoginOn} />
        <LoginModal onVisible={loginModal} closeModal={closeModal} />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={"administracion"}
            element={<Administration />} />
          <Route path="administracion/asesores/crear" element={<CrearAsesor />} />
          <Route path="administracion/clientes/crear" element={<CrearCliente />} />
          <Route path="periodos" element={<Periodos />} />
          <Route path="periodos/:empresa" element={<Periodo />} />
          <Route path="liquidaciones" element={<Liquidaciones />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;