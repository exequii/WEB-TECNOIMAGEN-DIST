import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'
import Pdfs from '../components/Pdfs'


import Esaote from '../images/esaote.png'
import Sonosite from '../images/sonosite.png'
import Vinno from '../images/vinno.jpg'
import Veterinaria from '../images/veterinaria.png'
import Wisonic from '../images/wisonic.jpg'

export const BodyUltra = () => {



    const [usuario,setUsuario] = useState(null)
    useEffect( ()=> {
        auth.onAuthStateChanged( (user) => {
            if (user){
                setUsuario(user.email)
            }
        })
    },[])

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    
    return(
        <div>

        {
            usuario ?
            
            (
                <div className="bodyUltra">
                    <div className="items">
                        <div onClick={() => {
                            setShow1(!show1);
                        }}>
                        <SubUnits nombre="ESAOTE" unidadImagen={Esaote}></SubUnits>
                       </div>
                        {
                            show1 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PDF1"></Pdfs>
                                    <Pdfs nombre="PDF2"></Pdfs>
                                    <Pdfs nombre="PDF3"></Pdfs>
                                </div>
                            )
                            :
                            (
                                <div></div>
                            )
                        }
                        
                    </div>

                    <div className="items">
                        <div onClick={() => {
                                setShow2(!show2);
                            }}>
                        <SubUnits nombre="SONOSITE" unidadImagen={Sonosite}></SubUnits>   
                        </div>

                        {
                            show2 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PDF1"></Pdfs>
                                    <Pdfs nombre="PDF2"></Pdfs>
                                    <Pdfs nombre="PDF3"></Pdfs>
                                </div>
                            )
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>

                    <div className="items">
                        <div onClick={() => {
                                    setShow3(!show3);
                                }}>
                        <SubUnits nombre="VINNO" unidadImagen={Vinno}></SubUnits>
                        </div>

                        {
                            show3 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PDF1"></Pdfs>
                                    <Pdfs nombre="PDF2"></Pdfs>
                                    <Pdfs nombre="PDF3"></Pdfs>
                                </div>
                            )
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>

                    <div className="items">
                        <div onClick={() => {
                                    setShow4(!show4);
                                }}>
                        <SubUnits nombre="VETERINARIA" unidadImagen={Veterinaria}></SubUnits>
                        </div>

                        {
                            show4 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PDF1"></Pdfs>
                                    <Pdfs nombre="PDF2"></Pdfs>
                                    <Pdfs nombre="PDF3"></Pdfs>
                                </div>
                            )
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>

                    <div className="items">
                        <div onClick={() => {
                                    setShow5(!show5);
                                }}>
                        <SubUnits nombre="WISONIC" unidadImagen={Wisonic}></SubUnits>
                        </div>

                        {
                            show5 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PDF1"></Pdfs>
                                    <Pdfs nombre="PDF2"></Pdfs>
                                    <Pdfs nombre="PDF3"></Pdfs>
                                </div>
                            )
                            :
                            (
                                <div></div>
                            )
                        }

                    </div>
                </div>
            )
            :
            (
                <div className="bodyContent">
                    <h1>NO PUEDES ACCEDER A ESTE CONTENIDO!</h1>
                </div>
            )
        }
        </div>
    );
}
