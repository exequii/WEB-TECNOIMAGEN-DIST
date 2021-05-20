import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'
import Pdfs from '../components/Pdfs'
import { BodyError } from './BodyError'


export const BodyEstetica = () => {



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
    
    return(
        <div>

        {
            usuario ?
            
            (
                <div className="bodyEstetica">

                    <div className="items">
                        <div onClick={() => {
                                    setShow1(!show1);
                                }}>
                        <SubUnits nombre="DEPILACION"></SubUnits>
                        </div>

                        {
                            show1 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="Candela LASEPRO"></Pdfs>
                                    <Pdfs nombre="Candela MAXPRO"></Pdfs>
                                    <Pdfs nombre="VENUS VELOCITY"></Pdfs>
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
                        <SubUnits nombre="ESCANER CORPORAL 3D"></SubUnits>
                        </div>

                        {
                            show2 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="STYKU"></Pdfs>
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
                        <SubUnits nombre="HIPERDROSIS"></SubUnits>
                        </div>

                        {
                            show3 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="PERFACTION ENERJET"></Pdfs>
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
                        <SubUnits nombre="LASER FRACCIONADO"></SubUnits>
                       </div>
                        {
                            show4 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="CANDELA CO2RE"></Pdfs>
                                    <Pdfs nombre="CANDELA PROFOUND"></Pdfs>
                                    <Pdfs nombre="CANDELA eMATRIX"></Pdfs>
                                    <Pdfs nombre="GMV PLEXR"></Pdfs>
                                    <Pdfs nombre="HIRONIC DOUBLOS"></Pdfs>
                                    <Pdfs nombre="VALEANT FRAXEL"></Pdfs>
                                    <Pdfs nombre="VENUS VIVA"></Pdfs>
                                    <Pdfs nombre="VYDENCE ETHEREA"></Pdfs>
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
                        <SubUnits nombre="MULTI PLATAFORMAS"></SubUnits>   
                        </div>

                        {
                            show5 ? 
                            (
                                <div className="sub-items">
                                    <Pdfs nombre="CANDELA MAXPRO"></Pdfs>
                                    <Pdfs nombre="CANDELA PRIMA"></Pdfs>
                                    <Pdfs nombre="CULTERA XEO"></Pdfs>
                                    <Pdfs nombre="VENUS VERSA"></Pdfs>
                                    <Pdfs nombre="VYDENCE ETHEREA"></Pdfs>
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
                        <SubUnits nombre="REJUVENECEDOR FACIAL"></SubUnits>   
                        </div>

                        {
                            show6 ? 
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
                                setShow7(!show7);
                            }}>
                        <SubUnits nombre="REMOCION TATUAJES"></SubUnits>   
                        </div>

                        {
                            show7 ? 
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
                                setShow8(!show8);
                            }}>
                        <SubUnits nombre="SALUD INTIMA FEMENINA"></SubUnits>   
                        </div>

                        {
                            show8 ? 
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
                                setShow9(!show9);
                            }}>
                        <SubUnits nombre="TRATAMIENTOS CORPORALES"></SubUnits>   
                        </div>

                        {
                            show9 ? 
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
                                setShow10(!show10);
                            }}>
                        <SubUnits nombre="TRATAMIENTOS VASCULARES"></SubUnits>   
                        </div>

                        {
                            show10 ? 
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
                <BodyError></BodyError>
            )
        }
        </div>
    );
}