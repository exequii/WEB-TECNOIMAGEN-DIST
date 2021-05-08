import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'

import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import {WorkUnits} from '../components/WorkUnits'

import Ultrasonido from '../images/ultra.jpg'
import Estetica from '../images/estetica.png'
import Hospitalaria from '../images/hospitalaria.png'
import Resonancia from '../images/oftalmologia.jpg'


export const BodyContent = () => {

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
                <div className="bodyContent">
                    <WorkUnits unidad="ULTRASONIDO" unidadImagen={Ultrasonido}></WorkUnits>
                    <WorkUnits unidad="ESTETICA" unidadImagen={Estetica}></WorkUnits>
                    <WorkUnits unidad="HOSPITALARIA" unidadImagen={Hospitalaria}></WorkUnits>
                    <WorkUnits unidad="RESONANCIA" unidadImagen={Resonancia}></WorkUnits>
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

export default BodyContent