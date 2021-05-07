import React, {useState} from 'react'
import logo2 from '../images/logo2.png'

import {auth} from '../firebaseconfig'

const BodyContent = () => {

    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const [msgError,setMsgError] = useState(null)

    const RegistrarUsuario = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
            .then( r => alert('Usuario Registrado'))
            .catch(e =>{
                if(e.code == 'auth/invalid-email'){
                    setMsgError('Formato de Email Incorrecto')
                }
                
                if(e.code == 'auth/weak-password'){
                    setMsgError('La contraseña debe tener 6 caracteres o más')
                }
            })
    }

      return (
                <div className="bodyContent">
                    <div>
                        <img src={logo2} alt=""></img>
                    </div>

                    <div>
                        <form onSubmit={RegistrarUsuario} className="form">

                                <input
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    placeholder="Introduce el Email"
                                    type="email" />
                                
                                <input
                                    onChange={(e)=>{setPass(e.target.value)}}
                                    placeholder="Introduce la contraseña"
                                    type="password" />
                                
                                <input value="Iniciar Sesion" type="submit"/>
                        </form>
                        {
                            msgError != null ?
                            (
                                <div>{msgError}</div>
                            )
                            :
                            (
                                <div></div>
                            )
                        }
                    </div>
                </div>
      );
    }   
export default BodyContent
