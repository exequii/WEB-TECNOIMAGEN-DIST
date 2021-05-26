import React, {Component,useState,useEffect} from 'react'

import Folder from '../images/folder.png'
import Pdfs from '../components/Pdfs'

export class Equipo extends Component {

    state = {
        divcontainer:false
    }

render(){
    var HandleChange = e =>
    {
        this.setState({divcontainer:!this.state.divcontainer});
    }
    const x = this.state.divcontainer;

    return(
        <div className="cont">
            <div className="equipoContainer" onClick={HandleChange}> 
                <img src={Folder} alt=""></img>
                <h2>
                    {this.props.nombre}
                </h2>
            </div>

            {
                x ?
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
    )
    }
}

export default Equipo