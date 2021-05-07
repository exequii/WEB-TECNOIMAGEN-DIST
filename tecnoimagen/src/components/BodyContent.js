import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'

import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


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
            
                </div>
            )
            :
            (
                <div>
            
                </div>
            )
        }
        </div>
        
        
    );
}

export default BodyContent