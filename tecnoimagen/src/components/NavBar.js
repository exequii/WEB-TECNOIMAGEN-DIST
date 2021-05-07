import React, { Component } from 'react'

import Banner from '../images/Banner.png'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Linkedin from '../images/linkedin.png'
import Telefono from '../images/telefono.png'

import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="firstNav">
                    <div className="nav-item">
                        <a className="not-border telefono" href="tel:+08103338273">
                            <img src={Telefono} alt=""></img>
                            0810-333-8273
                        </a>
                    </div>

                    <div className="nav-item">
                        <a className="not-border" href="https://www.tecnoimagen.com.ar/quienessomos">Compañia</a>
                        <a href="http://tecnoimagennews.blogspot.com/">Cursos y Congresos</a>
                        <a href="https://www.tecnoimagen.com.ar/index.php/contacto">Servicio Tecnico</a>
                        <a href="https://pedidos.tecnoimagen.com.ar/">Pedido online de consumibles</a>
                        <a href="https://www.tecnoimagen.com.ar/index.php/contacto">Atencion al Cliente</a>
                    </div>

                    <div className="nav-item">
                        <a className="not-border iconos" href="https://www.facebook.com/tecnoimagenargentina"><img src={Facebook} alt=""></img></a>
                        <a className="not-border iconos" href="https://www.instagram.com/tecnoimagen_sa/"><img src={Instagram} alt=""></img></a>
                        <a className="not-border iconos" href="https://www.linkedin.com/company/tecnoimagenargentina/mycompany/"><img src={Linkedin} alt=""></img></a>
                    </div>
                </nav>
                <nav className="secondNav">
                    <img alt="" src={Banner}></img>
                    <div className="navButtons">
                        <Link to="/" className="botoncito">Home</Link>
                        <a href="https://www.tecnoimagen.com.ar/" className="botoncito">Distribuidores</a>
                        <a href="https://www.tecnoimagen.com.ar/" className="botoncito">Vendedores</a>
                        <a href="https://www.tecnoimagen.com.ar/" className="botoncito">Clientes</a>
                    </div>
                </nav>
            </div>
        )
    }
}

