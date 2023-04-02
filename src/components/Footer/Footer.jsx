import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='sectionone'>

        <ul> 
          <div class='one'> Sobre Cool Style</div>
            <div>
              <Link  style={{color:"grey"}}  id='linkone' to="/QuienesSomos">¿Quienes Somos?</Link>
            </div>

            <div>
              <Link style={{color:"grey"}} id='linkone' to="/Promociones">Promociones</Link>
            </div>

            <div>
              <Link style={{color:"grey"}} id='linkone' to="/MetodosdePago">Metodos de Pago</Link>
            </div>
        </ul>
      </section>

      <section className='sectiontwo'>

        <ul> 
          <div class='two'> Politicas</div>
          <div>
            <Link style={{color:"grey"}} id='linkone' to="/TerminosyCondiciones">Términos y condiciones</Link>
          </div>
          <div>
            <Link style={{color:"grey"}} id='linkone' to="/CambiosyDevoluciones">Cambios y Devoluciones</Link>
          </div>
          <div>
            <Link style={{color:"grey"}} id='linkone' to="/Confidencialidad">Confidencialidad</Link>
          </div>
          <div>
            <Link style={{color:"grey"}} id='linkone' to="/Envios">Envíos</Link>
          </div>
        </ul>
      </section>


      <section class='sectionthree'> 


        <ul> 
          <div class= 'three'>Atención al Cliente</div>

         <div>
            <Link style={{color:"grey"}} id='linkone' to="/PreguntasFrecuentes">Preguntas Frecuentes</Link>
          </div>
          <div>
            <Link style={{color:"grey"}} id='linkone' to="/Contactanos">Contáctanos</Link>
          </div>
         
        </ul>
      </section>


    </footer>
  );
};

export default Footer;
