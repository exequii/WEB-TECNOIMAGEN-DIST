import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'

import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

import {WorkUnits} from '../components/WorkUnits'
import {BodyError} from '../components/BodyError'

import Ultrasonido from '../images/ultra.jpg'
import Estetica from '../images/estetica.png'
import Hospitalaria from '../images/hospitalaria.png'
import Oftalmologia from '../images/oftalmologia.jpg'
import Biopsia from '../images/biopsia.png'
import Radiologia from '../images/radiologia.png'
import MedicalIt from '../images/medicalit.png'


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
            <div className="contenedorSecciones">
                <div className="bodyContent">
                    <WorkUnits  unidad="ULTRASONIDO"
                                unidadImagen={Ultrasonido}
                                url='/ultrasonido'>
                    </WorkUnits>

                    <WorkUnits  unidad="ESTÉTICA"
                                unidadImagen={Estetica}
                                url='/estetica'>
                    </WorkUnits>

                    <WorkUnits  unidad="HOSPITALARIA" 
                                unidadImagen={Hospitalaria}
                                url='/hospitalaria'>
                    </WorkUnits>

                    <WorkUnits  unidad="RADIOLOGÍA" 
                                unidadImagen={Radiologia}
                                url='/radiologia'>
                    </WorkUnits>

                    <WorkUnits  unidad="INSUMOS" 
                                unidadImagen={Biopsia}
                                url='/biopsia'>
                    </WorkUnits>
                    <WorkUnits  unidad="MEDICAL IT" 
                                unidadImagen={MedicalIt}
                                url='/medicalit'>
                    </WorkUnits>
                    <WorkUnits  unidad="OFTALMOLOGÍA" 
                                unidadImagen={Oftalmologia}
                                url='/oftalmologia'>
                    </WorkUnits>
                </div>
            </div>
            )
            :
            (
                <BodyError></BodyError>
            )
        }
        </div>
        
        
    );
}

export default BodyContent