import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import 'bootstrap/dist/css/bootstrap.min.css'

import {Link} from 'react-router-dom'

import Denegado from '../images/denegado.png'

export const BodyError = () => {

return(
    <div className="bodyError">
        <img src={Denegado} alt=""></img>
        <h1>ACCESO DENEGADO!</h1>
        <p>Parece que no tienes acceso al contenido o ingresaste una URL invalida.
        </p>
        <Link className="login" to='/'>VOLVER</Link>
    </div>
)




}