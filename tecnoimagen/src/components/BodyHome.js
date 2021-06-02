import React from 'react'
import {Link} from 'react-router-dom'

export const BodyHome = () => {

      return (
                <div className="containerBody">
                    <div className="bodyHome">
                      <h1>DISTRIBUIDORES</h1>
                      <h2>Bienvenidos a la web de Distribuidores de Tecnoimagen,
                         un espacio donde podrá encontrar material e información
                          de interés sobre nuestros equipos y servicios.</h2>
                      <Link className="login" to='/login'>INGRESAR</Link>
                    </div>
                </div>
      )
}


export default BodyHome