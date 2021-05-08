import React, {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'

export const WorkUnits = (props) => {

    return(

        <Link className="unitsContainer"> 
            <img src={props.unidadImagen} alt=""></img>
            <h2>
                {props.unidad}
            </h2>
        </Link>
    )
}

export default WorkUnits