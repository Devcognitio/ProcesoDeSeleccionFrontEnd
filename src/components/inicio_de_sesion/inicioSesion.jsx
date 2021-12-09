import Particulas from "../particulas/particulas";
import astronautaLuna from '../../assets/images/82.png'
import astronautaCohete from '../../assets/images/84.png'
import logo from '../../assets/images/logo-somos-fondo-oscuro.png'
import './inicioSesion.css'
import React, { useEffect } from 'react';
import Login from "./login";

function InicioSesion() {
  useEffect(() => {
    let title = "Devco | Sign in"
    document.title = title;
  });
  return (
    <div>
      <div id="contenedor--cohete">
        <img id="astronauta--cohete" src={astronautaCohete} alt="astronauta sobre cohete" />

      </div>
      <div id="contenedor--boton__imagenes">
        <div id="contenedor--btn">
          <a href="https://www.devco.com.co/" target="_blank" rel="noreferrer"><img id="logo" src={logo} alt="logo somos devco" /></a>
          <div id="btn">
          <h1>Iniciar sesión</h1>
          <Login/>
          </div>
        </div>
        <div id="astronauta--luna">
          <img src={astronautaLuna} alt="astronauta sobre luna" />
        </div>

      </div>
      <div id="fondo">
        <Particulas />
      </div>
    </div>
  );
}

export default InicioSesion;