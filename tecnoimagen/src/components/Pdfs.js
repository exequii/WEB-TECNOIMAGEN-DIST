import React from 'react'

import LogoPdf from '../images/pdfs.png'

export const Pdfs = (props) => {
    return(

        <a className="pdf-item" href={props.url}> 
            <img src={LogoPdf} alt=""></img>
            <h3>
                {props.nombre}
            </h3>
        </a>
    )
}

export default Pdfs