import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='section one'>
        <ul> 
          <div> Sobre Cool Style</div>
            <div children='one'>
              <Link to="/Tienda">Tienda</Link>
            </div>

            <div>
              <Link to="/Promociones">Promociones</Link>
            </div>
        </ul>
      </section>

      <section className='section two'>
        <ul> 
          <div> Politicas</div>
          <div>
            <Link to="/TerminosyCondiciones">Términos y condiciones</Link>
          </div>
          <div>
            <Link to="/CambiosyDevoluciones">Cambios y Devoluciones</Link>
          </div>
          <div>
            <Link to="/Confidencialidad">Confidencialidad</Link>
          </div>
          <div>
            <Link to="/Envios">Envíos</Link>
          </div>
        </ul>
      </section>

      <section className='section three'>
        <ul> 
          <div> Atención al Cliente</div>

         <div>
            <Link to="/PreguntasFrecuentes">Preguntas Frecuentes</Link>
          </div>
          <div>
            <Link to="/Contactanos">Contáctanos</Link>
          </div>
         
        </ul>
      </section>


    </footer>
  );
};

export default Footer;
