import React, {useState,useEffect} from 'react'

import Folder from '../images/folder.png'

export const TipoEquipo = (props) => {
    return(

        <div className="tipoEquipoContainer"> 
            <img src={Folder} alt=""></img>
            <h2>
                {props.nombre}
            </h2>
        </div>
    )
}

export default TipoEquipo