import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="firstNav">
                    <div className="telefono">
                        <img></img>
                        <a href="tel:+08103338273" >0810-333-8273</a>
                    </div>

                    <div>
                        <a href="https://www.tecnoimagen.com.ar/quienessomos">Compañia</a>
                        <a href="">Distribuidores</a>
                        <a href="https://www.tecnoimagen.com.ar/index.php/contacto">Servicio Tecnico</a>
                        <a href="https://pedidos.tecnoimagen.com.ar/">Pedido online de consumibles</a>
                        <a href="">Ingresar</a>
                    </div>

                    <div>
                        <img></img>
                        <img></img>
                        <img></img>
                    </div>
                </nav>
            </div>
        )
    }
}

