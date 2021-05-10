import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'
import Pdfs from '../components/Pdfs'



export const BodyRadio = () => {



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
                                    setShow3(!show3);
                                }}>
                        <SubUnits nombre="RAYOS X" ></SubUnits>
                        </div>

                        {
                            show3 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="JUMONG F"></Pdfs>
                                    <Pdfs nombre="JUMONG GENERAL JMPs"></Pdfs>
                                    <Pdfs nombre="JUMONG MOBILE"></Pdfs>
                                    <Pdfs nombre="JUMONG GENERAL"></Pdfs>
                                    <Pdfs nombre="JUMONG M"></Pdfs>
                                    <Pdfs nombre="JUMONG MOBILE"></Pdfs>
                                    <Pdfs nombre="JUMONG RETRO"></Pdfs>
                                    <Pdfs nombre="GARION"></Pdfs>
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
                        <SubUnits nombre="RESONANCIA" ></SubUnits>
                        </div>

                        {
                            show4 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="AIRIS VENTO"></Pdfs>
                                    <Pdfs nombre="APERTO LUCENT"></Pdfs>
                                    <Pdfs nombre="ECHELON SMART"></Pdfs>
                                    <Pdfs nombre="SOG SCAN"></Pdfs>
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
                        <SubUnits nombre="TOMOGRAFIA" ></SubUnits>
                        </div>

                        {
                            show5 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="SCENARIA"></Pdfs>
                                    <Pdfs nombre="SUPRIA 16"></Pdfs>
                                    <Pdfs nombre="SUPRIA 64"></Pdfs>
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
                            setShow1(!show1);
                        }}>
                        <SubUnits nombre="DENSITOMETRIA" ></SubUnits>
                       </div>
                        {
                            show1 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PRIMUS OSTEOSYS"></Pdfs>
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
                        <SubUnits nombre="MAMOGRAFIA" ></SubUnits>   
                        </div>

                        {
                            show2 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="AMULET INNOVALITY"></Pdfs>
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
