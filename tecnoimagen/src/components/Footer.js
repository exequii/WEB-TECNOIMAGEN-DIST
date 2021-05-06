import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
render(){
  return (
    < div className='footer'>

      <div class='footer-links'>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>DIAGNOSTICO POR IMAGENES</h2>
            <Link to='/'>Historia</Link>
            <Link to='/'>Personal</Link>
            <Link to='/'>Fuentes</Link>
            <Link to='/'>Terminos de Servicio</Link>
          </div>

          <div className='footer-link-items'>
            <h2>QUIROFANO</h2>
            <Link to='/'>Email</Link>
            <Link to='/'>Soporte</Link>
            <Link to='/'>Whatsapp</Link>
            <Link to='/'>Informacion Adicional</Link>
          </div>

        </div>

        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>TERAPIA INTENSIVA</h2>
            <Link to='/'>Udemy</Link>
            <Link to='/'>OMBdb</Link>
            <Link to='/'>Bulma</Link>
            <Link to='/'>Google Fonts</Link>
          </div>

          <div className='footer-link-items'>
            <h2>CONTACTO</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>Twitter</Link>
          </div>

          <div className='footer-link-items'>
            <h2>MEDICINA ESTETICA</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>Twitter</Link>
          </div>

        </div>

      </div>
    </div>
  );
}
}