import React, {useState,useEffect} from 'react'

import {Link} from 'react-router-dom'
import Folder from '../images/folder.png'

export const SubUnits = (props) => {
    return(

        <div className="subUnitsContainer"> 
            <img src={Folder} alt=""></img>
            <h2>
                {props.nombre}
            </h2>
        </div>
    )
}

export default SubUnits