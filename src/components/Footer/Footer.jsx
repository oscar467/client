import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
<<<<<<< HEAD
      <section class='sectionone'> 
=======
      <section className='section one'>
>>>>>>> 60b7d4b5d2c0e86ffd919bc589a0a7a3cc3d8c92
        <ul> 
          <div class='one'> Sobre Cool Style</div>
            <div>
              <Link id='linkone' to="/QuienesSomos">¿Quienes Somos?</Link>
            </div>

            <div>
              <Link id='linkone' to="/Promociones">Promociones</Link>
            </div>

            <div>
              <Link id='linkone' to="/MetodosdePago">Metodos de Pago</Link>
            </div>
        </ul>
      </section>

<<<<<<< HEAD
      <section class='sectiontwo'> 
=======
      <section className='section two'>
>>>>>>> 60b7d4b5d2c0e86ffd919bc589a0a7a3cc3d8c92
        <ul> 
          <div class='two'> Politicas</div>
          <div>
            <Link id='linkone' to="/TerminosyCondiciones">Términos y condiciones</Link>
          </div>
          <div>
            <Link id='linkone' to="/CambiosyDevoluciones">Cambios y Devoluciones</Link>
          </div>
          <div>
            <Link id='linkone' to="/Confidencialidad">Confidencialidad</Link>
          </div>
          <div>
            <Link id='linkone' to="/Envios">Envíos</Link>
          </div>
        </ul>
      </section>

<<<<<<< HEAD
      <section class='sectionthree'> 
=======
      <section className='section three'>
>>>>>>> 60b7d4b5d2c0e86ffd919bc589a0a7a3cc3d8c92
        <ul> 
          <div class= 'three'>Atención al Cliente</div>

         <div>
            <Link id='linkone' to="/PreguntasFrecuentes">Preguntas Frecuentes</Link>
          </div>
          <div>
            <Link id='linkone' to="/Contactanos">Contáctanos</Link>
          </div>
         
        </ul>
      </section>


    </footer>
  );
};

export default Footer;
