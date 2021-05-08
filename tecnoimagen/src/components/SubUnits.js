import React, {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'

export const SubUnits = (props) => {
    return(

        <div className="subUnitsContainer"> 
            <img src={props.unidadImagen} alt=""></img>
            <h2>
                {props.nombre}
            </h2>
        </div>
    )
}

export default SubUnits