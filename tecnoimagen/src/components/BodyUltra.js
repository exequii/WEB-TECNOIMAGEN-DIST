import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import {Dropdown, DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'


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


    
    return(
        <div>

        {
            usuario ?
            
            (
                <div className="bodyUltra">
                    <div>
                        <SubUnits nombre="ESAOTE" unidadImagen={Esaote}></SubUnits>
                        <div>
                            
                        </div>
                    </div>

                    <div>
                        <SubUnits nombre="SONOSITE" unidadImagen={Sonosite}></SubUnits>
                        <div>
                            
                        </div>
                    </div>

                    <div>
                        <SubUnits nombre="VINNO" unidadImagen={Vinno}></SubUnits>
                        <div>
                            
                        </div>
                    </div>

                    <div>
                        <SubUnits nombre="VETERINARIA" unidadImagen={Veterinaria}></SubUnits>
                        <div>
                            
                        </div>
                    </div>

                    <div>
                        <SubUnits nombre="WISONIC" unidadImagen={Wisonic}></SubUnits>
                        <div>
                            
                        </div>
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
