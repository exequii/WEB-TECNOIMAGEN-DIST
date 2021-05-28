import React, {useState,useEffect} from 'react'

export const TipoEquipo = (props) => {
    return(

        <div className="tipoEquipoContainer"> 
            <img src={props.imagen} alt=""></img>
            <h2>
                {props.nombre}
            </h2>
        </div>
    )
}

export default TipoEquipo