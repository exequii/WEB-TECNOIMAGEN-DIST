import React, {useState,useEffect} from 'react'

import Folder from '../images/folder.png'

export const Equipo = (props) => {
    return(

        <div className="equipoContainer"> 
            <img src={Folder} alt=""></img>
            <h2>
                {props.nombre}
            </h2>
        </div>
    )
}

export default Equipo