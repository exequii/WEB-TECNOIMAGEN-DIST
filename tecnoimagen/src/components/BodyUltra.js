import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'
import Pdfs from '../components/Pdfs'

import { BodyError } from './BodyError'

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
                        <SubUnits nombre="ESAOTE"></SubUnits>
                       </div>
                        {
                            show1 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="ALPHA"></Pdfs>
                                    <Pdfs nombre="CLASS C eHD"></Pdfs>
                                    <Pdfs nombre="CLASS C"></Pdfs>
                                    <Pdfs nombre="EIGHT eXP"></Pdfs>
                                    <Pdfs nombre="EIGHT"></Pdfs>
                                    <Pdfs nombre="GAMMA"></Pdfs>
                                    <Pdfs nombre="OMEGA"></Pdfs>
                                    <Pdfs nombre="SEVEN"></Pdfs>
                                    <Pdfs nombre="SIGMA"></Pdfs>
                                    <Pdfs nombre="SIX"></Pdfs>
                                    <Pdfs nombre="X5"></Pdfs>
                                    <Pdfs nombre="X6"></Pdfs>
                                    <Pdfs nombre="X7"></Pdfs>
                                    <Pdfs nombre="X8"></Pdfs>
                                    <Pdfs nombre="X9"></Pdfs>
                                    <Pdfs nombre="25 GOLD"></Pdfs>
                                    <Pdfs nombre="30 GOLD"></Pdfs>
                                    <Pdfs nombre="ML 40"></Pdfs>
                                    <Pdfs nombre="ML 40 BLUE"></Pdfs>
                                    <Pdfs nombre="ML 40 HD"></Pdfs>
                                    <Pdfs nombre="ML 50"></Pdfs>
                                    <Pdfs nombre="ML 70"></Pdfs>
                                    <Pdfs nombre="TWICE"></Pdfs>
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
                        <SubUnits nombre="SONOSITE"></SubUnits>   
                        </div>

                        {
                            show2 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="EDGE II VET"></Pdfs>
                                    <Pdfs nombre="EDGE II"></Pdfs>
                                    <Pdfs nombre="IVIZ"></Pdfs>
                                    <Pdfs nombre="M-TURBO"></Pdfs>
                                    <Pdfs nombre="M-TURBO C"></Pdfs>
                                    <Pdfs nombre="MICROMAXX"></Pdfs>
                                    <Pdfs nombre="M-TURBO VET"></Pdfs>
                                    <Pdfs nombre="S II"></Pdfs>
                                    <Pdfs nombre="TITAN"></Pdfs>
                                    <Pdfs nombre="VEVO MD"></Pdfs>
                                    <Pdfs nombre="X-PORTE"></Pdfs>
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
                        <SubUnits nombre="VINNO"></SubUnits>
                        </div>

                        {
                            show3 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="VINNO 5"></Pdfs>
                                    <Pdfs nombre="VINNO E20"></Pdfs>
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
                        <SubUnits nombre="VETERINARIA"></SubUnits>
                        </div>

                        {
                            show4 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="EDGE II"></Pdfs>
                                    <Pdfs nombre="M-TURBO"></Pdfs>
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
                        <SubUnits nombre="WISONIC"></SubUnits>
                        </div>

                        {
                            show5 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PILOTER VET"></Pdfs>
                                    <Pdfs nombre="PILOTER"></Pdfs>
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
