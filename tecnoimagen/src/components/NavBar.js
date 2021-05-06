import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="firstNav">
                    <div className="nav-item">
                        <img></img>
                        <a className="not-border" href="tel:+08103338273" >0810-333-8273</a>
                    </div>

                    <div className="nav-item">
                        <a className="not-border" href="https://www.tecnoimagen.com.ar/quienessomos">Compañia</a>
                        <a href="http://tecnoimagennews.blogspot.com/">Cursos y Congresos</a>
                        <a href="https://www.tecnoimagen.com.ar/index.php/contacto">Servicio Tecnico</a>
                        <a href="https://pedidos.tecnoimagen.com.ar/">Pedido online de consumibles</a>
                        <a href="https://www.tecnoimagen.com.ar/index.php/contacto">Atencion al Cliente</a>
                    </div>

                    <div className="nav-item">
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </nav>
                <nav className="secondNav">
                    <img alt="" src="https://lh3.googleusercontent.com/proxy/B397NW4L8z55d6rwj89hNsaEA3TxoCQJjMNMym1sekPu4fGCONT1KUbBHt0XefthoM69fkEpyHBYR9QnYnjVle4rNf9FcXYZi9Qk9eqdaBsyjF6xnzXXzjVbERxo8UBZ"></img>
                    <div className="navButtons">
                        <Link to="/">Home</Link>
                        <a href="">Distribuidores</a>
                        <a href="">Vendedores</a>
                        <a href="">Clientes</a>
                    </div>
                </nav>
            </div>
        )
    }
}

