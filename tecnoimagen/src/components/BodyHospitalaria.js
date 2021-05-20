import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'
import Pdfs from '../components/Pdfs'
import { BodyError } from './BodyError'



export const BodyHospitalaria= () => {



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
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    const [show9, setShow9] = useState(false)
    const [show10, setShow10] = useState(false)
    const [show11, setShow11] = useState(false)
    const [show12, setShow12] = useState(false)
    const [show13, setShow13] = useState(false)
    const [show14, setShow14] = useState(false)
    const [show15, setShow15] = useState(false)
    const [show16, setShow16] = useState(false)
    const [show17, setShow17] = useState(false)
    const [show18, setShow18] = useState(false)
    const [show19, setShow19] = useState(false)
    const [show20, setShow20] = useState(false)
    const [show21, setShow21] = useState(false)
    const [show22, setShow22] = useState(false)
    const [show23, setShow23] = useState(false)
    const [show24, setShow24] = useState(false)
    const [show25, setShow25] = useState(false)
    
    return(
        <div>

        {
            usuario ?
            
            (
                <div className="bodyHospitalaria">

                    <div className="items">
                        <div onClick={() => {
                            setShow1(!show1);
                        }}>
                        <SubUnits nombre="BOMBAS"></SubUnits>
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
                        <SubUnits nombre="CAMAS"></SubUnits>   
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

                    <div className="items">
                        <div onClick={() => {
                                    setShow3(!show3);
                                }}>
                        <SubUnits nombre="CAMILLAS"></SubUnits>
                        </div>

                        {
                            show3 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="JUMONG F"></Pdfs>
                                    <Pdfs nombre="GENERAL JMPs"></Pdfs>
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
                        <SubUnits nombre="COLCHONES"></SubUnits>
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
                        <SubUnits nombre="COLUMNAS DE TECHO"></SubUnits>
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
                            setShow6(!show6);
                        }}>
                        <SubUnits nombre="DESFIBRILADORES"></SubUnits>
                       </div>
                        {
                            show6 ? 
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
                            setShow7(!show7);
                        }}>
                        <SubUnits nombre="ECG"></SubUnits>
                       </div>
                        {
                            show7 ? 
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
                            setShow8(!show8);
                        }}>
                        <SubUnits nombre="ENDOSCOPIO"></SubUnits>
                       </div>
                        {
                            show8 ? 
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
                            setShow9(!show9);
                        }}>
                        <SubUnits nombre="ERGOESPIROMETRIA"></SubUnits>
                       </div>
                        {
                            show9 ? 
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
                            setShow10(!show10);
                        }}>
                        <SubUnits nombre="ESTACION DE DIAGNOSTICO"></SubUnits>
                       </div>
                        {
                            show10 ? 
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
                            setShow11(!show11);
                        }}>
                        <SubUnits nombre="HOLTER"></SubUnits>
                       </div>
                        {
                            show11 ? 
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
                            setShow12(!show12);
                        }}>
                        <SubUnits nombre="LAMPARAS"></SubUnits>
                       </div>
                        {
                            show12 ? 
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
                            setShow13(!show13);
                        }}>
                        <SubUnits nombre="MAPA"></SubUnits>
                       </div>
                        {
                            show13 ? 
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
                            setShow15(!show15);
                        }}>
                        <SubUnits nombre="MAQUINA ANESTESIA"></SubUnits>
                       </div>
                        {
                            show15 ? 
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
                            setShow16(!show16);
                        }}>
                        <SubUnits nombre="MESA DE CIRUGIA"></SubUnits>
                       </div>
                        {
                            show16 ? 
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
                            setShow17(!show17);
                        }}>
                        <SubUnits nombre="MESA DE LUZ"></SubUnits>
                       </div>
                        {
                            show17 ? 
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
                            setShow18(!show18);
                        }}>
                        <SubUnits nombre="MONITORES"></SubUnits>
                       </div>
                        {
                            show18 ? 
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
                            setShow19(!show19);
                        }}>
                        <SubUnits nombre="NEONATOLOGIA"></SubUnits>
                       </div>
                        {
                            show19 ? 
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
                            setShow20(!show20);
                        }}>
                        <SubUnits nombre="NEOVERO"></SubUnits>
                       </div>
                        {
                            show20 ? 
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
                            setShow21(!show21);
                        }}>
                        <SubUnits nombre="PULSIOXIMETRO"></SubUnits>
                       </div>
                        {
                            show21 ? 
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
                            setShow22(!show22);
                        }}>
                        <SubUnits nombre="RESPIRADORES"></SubUnits>
                       </div>
                        {
                            show22 ? 
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
                            setShow23(!show23);
                        }}>
                        <SubUnits nombre="SILLONES"></SubUnits>
                       </div>
                        {
                            show23 ? 
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
                            setShow24(!show24);
                        }}>
                        <SubUnits nombre="TEST DE ESFUERZO"></SubUnits>
                       </div>
                        {
                            show24 ? 
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
                            setShow25(!show25);
                        }}>
                        <SubUnits nombre="VIDEO LARINGOSCOPIO"></SubUnits>
                       </div>
                        {
                            show25 ? 
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