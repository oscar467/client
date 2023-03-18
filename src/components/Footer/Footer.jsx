import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section class='section one'> 
        <ul> 
          <div> Sobre Cool Style</div>
         <li><a href="/">Tienda</a></li>
         <li><a href="/">Promociones</a></li>
        </ul>
      </section>

      <section class='section two'> 
        <ul> 
          <div> Politicas</div>
         <li><a href="/">Términos y condiciones</a></li>
         <li><a href="/client">Cambios y devoluciones</a></li>
         <li><a href="/client">Confidencialidad</a></li>
         <li><a href="/">Envíos</a></li>
        </ul>
      </section>

      <section class='section three'> 
        <ul> 
          <div> Atención al Cliente</div>
         <li><a href="/">Preguntas frecuentes</a></li>
         <li><a href="/">Contáctanos</a></li>
         
        </ul>
      </section>


    </footer>
  );
};

export default Footer;
