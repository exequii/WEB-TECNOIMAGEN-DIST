import React, { useEffect, useState} from 'react'

import Banner from '../images/Banner.png'
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import Instagram from '../images/instagram.png'
import Youtube from '../images/youtube.png'

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
                    <Link to="/"><img alt="" src={Banner}></img></Link>
                    <div className="navButtons">
                        {
                        usuario ?
                        (
                            <div className="contenedorDesplegable">
                            <Link to="/content" className="botoncito">Unidades de Trabajo<i className="fas fa-angle-down"></i></Link>
                                <div className="desplegable">
                                    <Link to="/ultrasonido">Ultrasonido</Link>
                                    <Link to="/estetica">Estetica</Link>
                                    <Link to="/hospitalaria">Hospitalaria</Link>
                                    <Link to="/radiologia">Radiologia</Link>
                                    <Link to="/">Insumos</Link>
                                    <Link to="/">Medical IT</Link>
                                    <Link to="/">Oftalmologia</Link>
                                </div>
                            </div>
                        )
                            :
                        (
                            <div></div>
                        )
                    }
                    </div>
                    {
                        usuario ?
                        (
                            <button onClick={CerrarSesion} className="logout"> Cerrar Sesion</button>
                        )
                            :
                        (
                            <div></div>
                        )
                    }
                    <div className="iconos">
                        <a href=""><img alt="" src={Facebook}></img></a>
                        <a href=""><img alt="" src={Instagram}></img></a>
                        <a href=""><img alt="" src={Linkedin}></img></a>
                        <a href=""><img alt="" src={Youtube}></img></a>
                    </div>
                </nav>
            </div>
        )
    }
//}

