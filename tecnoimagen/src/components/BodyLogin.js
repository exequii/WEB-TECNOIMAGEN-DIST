import React, {useState,useEffect} from 'react'
import logo2 from '../images/logo2.png'
import {useHistory} from 'react-router-dom'

import {auth} from '../firebaseconfig'

const BodyLogin = () => {

    const[email,setEmail] = useState('')
    const[pass,setPass] = useState('')
    const [msgError,setMsgError] = useState(null)
    const historial = useHistory()

    const RegistrarUsuario = (e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
            .then( r => {
                historial.push('/')
            })
            .catch(e =>{
                if(e.code === 'auth/invalid-email'){
                    setMsgError('Formato de Email Incorrecto')
                }
                
                if(e.code === 'auth/weak-password'){
                    setMsgError('La contraseña debe tener 6 caracteres o más')
                }
            })
    }

    const LoginUsuario = () => {
        auth.signInWithEmailAndPassword(email,pass)
        .then( (r) => {
            historial.push('/content')
        })
        .catch ( (err) =>{

            if(err.code === 'auth/wrong-password'){
                setMsgError('El Mail o la contraseña no son correctos')
            }
        })
    }

      return (
                <div className="bodyLogin">
                    <div>
                        <img src={logo2} alt=""></img>
                    </div>

                    <div className="formContainer">
                        <form onSubmit={RegistrarUsuario} className="form">
                                <img src={logo2} alt=""></img>

                                <label>Correo Electronico:</label>
                                <input
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    placeholder="Introduce el Email"
                                    type="email" />

                                <label>Contraseña:</label>
                                <input
                                    onChange={(e)=>{setPass(e.target.value)}}
                                    placeholder="Introduce la contraseña"
                                    type="password" />
                                
                                <input value="Registrar" type="submit"/>
                                <button onClick={LoginUsuario}>
                                    Iniciar Sesion
                                </button>
                        
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
        
                        </form>
                    </div>
                </div>
      );
    }   
export default BodyLogin
