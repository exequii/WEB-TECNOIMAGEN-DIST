import React, {useState,useEffect} from 'react'
import { auth } from '../firebaseconfig'
import 'bootstrap/dist/css/bootstrap.min.css'



import SubUnits from '../components/SubUnits'
import Pdfs from '../components/Pdfs'
import TipoEquipo from '../components/TipoEquipo'
import Equipo from '../components/Equipo'
import { BodyError } from './BodyError'

import Comen from '../images/comen.png'
import Mindray from '../images/mindray.png'
import Pardo from '../images/pardo.png'
import Schiller from '../images/schiller.png'
import Neo from '../images/neo.png'
import Insighters from '../images/insighters.png'



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
    const [show26, setShow26] = useState(false)
    const [show27, setShow27] = useState(false)
    const [show28, setShow28] = useState(false)
    const [show288, setShow288] = useState(false)


    const [show29, setShow29] = useState(false)
    const [show30, setShow30] = useState(false)
    const [show31, setShow31] = useState(false)
    const [show32, setShow32] = useState(false)
    const [show33, setShow33] = useState(false)
    const [show34, setShow34] = useState(false)


    
    return(
        <div>

        {
            usuario ?
            
            (
                <div className="bodyHospitalaria">
{/*********************************************************************************************************** */}

                    <div className="items">
                        <div onClick={() => {
                                setShow29(!show29);
                        }}>
                        <TipoEquipo nombre="COMEN"
                                    imagen={Comen}>

                        </TipoEquipo>
                        </div>
                    </div>

                    {  
                        show29 ? 

                        (
                            <div className="tipoEquipo">
                                <div className="items">
                                    <div onClick={() => {
                                        setShow1(!show1);
                                    }}>
                                    <SubUnits nombre="FOTOTERAPIA"></SubUnits>
                                    </div>
        
                                    {
                                        show1 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="BL70"></Equipo>
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
                                    <SubUnits nombre="INCUBADORAS"></SubUnits>   
                                    </div>

                                    {
                                        show2 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="B3"></Equipo>
                                                <Equipo nombre="B6"></Equipo>
                                                <Equipo nombre="B8"></Equipo>
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
                                    <SubUnits nombre="SERVOCUNAS"></SubUnits>
                                    </div>

                                    {
                                        show3 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="BQ80"></Equipo>
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
                                    <SubUnits nombre="MONITORES FETALES"></SubUnits>
                                    </div>

                                    {
                                        show4 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="C11"></Equipo>
                                                <Equipo nombre="C20"></Equipo>
                                                <Equipo nombre="C21"></Equipo>
                                                <Equipo nombre="C22"></Equipo>
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
                        <div></div>
                    )
                    }
{/************************************************************************************************************* */}
                    
                    <div className="items">
                        <div onClick={() => {
                                setShow30(!show30);
                        }}>
                        <TipoEquipo nombre="INSIGHTERS"
                                    imagen={Insighters}></TipoEquipo>
                        </div>
                    </div>

                    {
                        show30 ?
                
                    (
                    <div className="tipoEquipo">
                        <div className="items">
                            <div onClick={() => {
                                        setShow5(!show5);
                                    }}>
                            <SubUnits nombre="SET DE VIA AEREA"></SubUnits>
                            </div>

                            {
                                show5 ? 
                                (
                                    <div className="cont">
                                        <Equipo nombre="VIDEOLARINGO iS3 L"></Equipo>
                                        <Equipo nombre="FIBROLARINGO iS3 F"></Equipo>
                                        <Equipo nombre="VIDEOLARINGO SEMIRIGIDO"></Equipo>
                                        <Equipo nombre="KIT PARA EL MANEJO DE VIA AEREA"></Equipo>
                                        <Equipo nombre="ESTACION DE TRABAJO"></Equipo>
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
                        <div></div>
                    )
                    }
{/***************************************************************************************************************** */}

                    <div className="items">
                        <div onClick={() => {
                                setShow31(!show31);
                        }}>
                        <TipoEquipo nombre="MINDRAY"
                                    imagen={Mindray}></TipoEquipo>
                        </div>
                    </div>

                    {
                        show31 ?
                        (
                            <div className="tipoEquipo">
                                <div className="items">
                                    <div onClick={() => {
                                        setShow6(!show6);
                                    }}>
                                    <SubUnits nombre="BOMBAS DE INFUSION, RACKS Y CENTRALES"></SubUnits>
                                    </div>
                                    {
                                        show6 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="BENEFUSION VP5, SP5 y SP5 TCI"></Equipo>
                                                <Equipo nombre="BENEFUSION VP3 y SP3"></Equipo>
                                                <Equipo nombre="VP1 y SP1"></Equipo>
                                                <Equipo nombre="RACKS"></Equipo>
                                                <Equipo nombre="CENTRAL DE MONITOREO DE INFUSIONES"></Equipo>
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
                                    <SubUnits nombre="CENTRALES DE MONITOREO"></SubUnits>
                                    </div>
                                    {
                                        show7 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="HYPERVISOR"></Equipo>
                                                <Equipo nombre="CMS BENEVISION"></Equipo>
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
                                    <SubUnits nombre="COLUMNAS"></SubUnits>
                                    </div>
                                    {
                                        show8 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="HYPORT"></Equipo>
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
                                    <SubUnits nombre="DESFIBRILADORES"></SubUnits>
                                    </div>
                                    {
                                        show9 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="D1"></Equipo>
                                                <Equipo nombre="C1 y C2"></Equipo>
                                                <Equipo nombre="D3 y D6"></Equipo>
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
                                    <SubUnits nombre="ELECTROCARDIOGRAFOS"></SubUnits>
                                    </div>
                                    {
                                        show10 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="R3 y R12"></Equipo>
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
                                    <SubUnits nombre="HUMIFICADORES"></SubUnits>
                                    </div>
                                    {
                                        show11 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="JIKE"></Equipo>
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
                                    <SubUnits nombre="LAMPARAS SCIALITICAS"></SubUnits>
                                    </div>
                                    {
                                        show12 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="HYLED 200 y 600"></Equipo>
                                                <Equipo nombre="HYLED 7"></Equipo>
                                                <Equipo nombre="HYLED 8"></Equipo>
                                                <Equipo nombre="HYLED X"></Equipo>
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
                                    <SubUnits nombre="MESAS DE ANESTESIA"></SubUnits>
                                    </div>
                                    {
                                        show13 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="WATO 20 y WATO 35"></Equipo>
                                                <Equipo nombre="WATO 55 y 65 PRO"></Equipo>
                                                <Equipo nombre="A5, A7 y A9"></Equipo>
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
                                    <SubUnits nombre="MESAS DE CIRUGIA"></SubUnits>
                                    </div>
                                    {
                                        show15 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="UNIBASE 30"></Equipo>
                                                <Equipo nombre="HYBASE 3000"></Equipo>
                                                <Equipo nombre="HYBASE 6100"></Equipo>
                                                <Equipo nombre="HYBASE 8300/8500"></Equipo>
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
                                    <SubUnits nombre="MONITORES MULTIPARAMETRICOS"></SubUnits>
                                    </div>
                                    {
                                        show16 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="uMEC"></Equipo>
                                                <Equipo nombre="ePM"></Equipo>
                                                <Equipo nombre="BENEVISION"></Equipo>
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
                                    <SubUnits nombre="MONITORES DE SIGNOS VITALES"></SubUnits>
                                    </div>
                                    {
                                        show17 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="VS 600"></Equipo>
                                                <Equipo nombre="VS 900"></Equipo>
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
                                    <SubUnits nombre="OXIMETROS"></SubUnits>
                                    </div>
                                    {
                                        show18 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="PM60"></Equipo>
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
                                    <SubUnits nombre="TELEMETROS"></SubUnits>
                                    </div>
                                    {
                                        show19 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="TM80"></Equipo>
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
                                    <SubUnits nombre="TORRE DE LAPAROSCOPIA"></SubUnits>
                                    </div>
                                    {
                                        show20 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="HD3"></Equipo>
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
                                    <SubUnits nombre="VENTILADORES O RESPIRADORES"></SubUnits>
                                    </div>
                                    {
                                        show21 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="E3"></Equipo>
                                                <Equipo nombre="SV300"></Equipo>
                                                <Equipo nombre="SV600/SV800"></Equipo>
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
                                <div></div>
                            )
                        }

{/****************************************************************************************************************** */}
                    <div className="items">
                        <div onClick={() => {
                                setShow32(!show32);
                        }}>
                        <TipoEquipo nombre="NEOVERO"
                                    imagen={Neo}></TipoEquipo>
                        </div>
                    </div>

                    {
                        show32 ?
                    (
                    <div className="tipoEquipo">
                        <div className="items">
                            <div onClick={() => {
                                setShow22(!show22);
                            }}>
                            <SubUnits nombre="ACCESO WEB Y ACCESO MOBILE"></SubUnits>
                            </div>
                            {
                                show22 ? 
                                (
                                    <div className="sub-items">
                                        <Pdfs nombre="ANMAT"></Pdfs>
                                        <Pdfs nombre="PRESENTACION"></Pdfs>
                                        <Pdfs nombre="EETT PARA PLIEGO"></Pdfs>
                                        <Pdfs nombre="DATASHEET"></Pdfs>
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
                        <div></div>
                    )
                    }

{/****************************************************************************************************************** */}

                    <div className="items">
                        <div onClick={() => {
                                setShow33(!show33);
                        }}>
                        <TipoEquipo nombre="PARDO"
                                    imagen={Pardo}></TipoEquipo>
                        </div>
                    </div>

                    {
                        show33 ?
                        (
                            <div className="tipoEquipo">
                                <div className="items">
                                    <div onClick={() => {
                                        setShow23(!show23);
                                    }}>
                                    <SubUnits nombre="CAMAS"></SubUnits>
                                    </div>
                                    {
                                        show23 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="V1,V2 y V3"></Equipo>
                                                <Equipo nombre="BARIATRICA"></Equipo>
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
                                    <SubUnits nombre="CAMILLAS"></SubUnits>
                                    </div>
                                    {
                                        show24 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="ATICA-TARSIS"></Equipo>
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
                                    <SubUnits nombre="CUNAS"></SubUnits>
                                    </div>
                                    {
                                        show25 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="TREND-RODAS"></Equipo>
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
                                        setShow26(!show26);
                                    }}>
                                    <SubUnits nombre="MESAS DE COMER"></SubUnits>
                                    </div>
                                    {
                                        show26 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="ATRIL GAS"></Equipo>
                                                <Equipo nombre="SALDUBA"></Equipo>
                                                <Equipo nombre="VOLTEABLE"></Equipo>
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
                                        setShow27(!show27);
                                    }}>
                                    <SubUnits nombre="MOBILIARIOS"></SubUnits>
                                </div>
                                    {
                                        show27 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="SILLONES"></Equipo>
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
                            <div></div>
                        )
                    }

{/***************************************************************************************************************** */}

                    <div className="items">
                        <div onClick={() => {
                                setShow34(!show34);
                        }}>
                        <TipoEquipo nombre="SCHILLER"
                                    imagen={Schiller}></TipoEquipo>
                        </div>
                    </div>
                    
                    {
                        show34 ?
                        (
                            <div className="tipoEquipo">
                                <div className="items">
                                    <div onClick={() => {
                                        setShow28(!show28);
                                    }}>
                                    <SubUnits nombre="MAPA Y HOLTER"></SubUnits>
                                    </div>
                                    {
                                        show28 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="BR 102 PLUS Y PLUS PWA"></Equipo>
                                                <Equipo nombre="MEDILOG F12 - MEDILOGAR"></Equipo>
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
                                        setShow288(!show288);
                                    }}>
                                    <SubUnits nombre="TEST DE ESFUERZO"></SubUnits>
                                    </div>
                                    {
                                        show288 ? 
                                        (
                                            <div className="cont">
                                                <Equipo nombre="CARDIOVIT CS200 EXCELLENCE, TOUCH y CS104"></Equipo>
                                                <Equipo nombre="CS200 ERGOESPIRO"></Equipo>
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
                            <div></div>
                        )
                }
{/************************************************************************************************************************ */}

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