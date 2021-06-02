import React, { useEffect, useState} from 'react'

import Banner from '../images/Banner.png'

import { auth } from '../firebaseconfig'

import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

//export class NavBar extends Component {

export const NavBar = () => {

    const historial = useHistory()
    const [usuario,setUsuario] = useState(null)
    useEffect( ()=> {
        auth.onAuthStateChanged( (user) => {
            if (user){
                setUsuario(user.email)
            }
        })
    },[])

    const CerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        historial.push('/')
    }

    //render() {
        return (
            <div className="contenedorNav">
                <nav className="secondNav">
                    <img alt="" src={Banner}></img>
                    <div className="navButtons">
                        <Link to="/" className="botoncito">Home</Link>
                        <a href="https://www.tecnoimagen.com.ar/" className="botoncito">Vendedores</a>
                        <a href="https://www.tecnoimagen.com.ar/" className="botoncito">Clientes</a>
                        <a href="https://www.tecnoimagen.com.ar/" className="botoncito">Contacto</a>
                    </div>
                    {
                        usuario ?
                        (
                            <button onClick={CerrarSesion} className="logout"> Cerrar Sesion</button>
                        )
                            :
                        (
                            <div className="logout"></div>
                        )
                        }
                </nav>
            </div>
        )
    }
//}

