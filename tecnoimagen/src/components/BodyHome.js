import React, { Component } from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

export class BodyHome extends Component {
    render(){
      return (
                <div className="containerBody">
                    <div className="bodyHome">
                      <img src={logo} alt=""></img>
                      <h1>TECNOIMAGEN</h1>
                      <h2>DISTRIBUIDORES</h2>
                      <Link className="login" to='/login'>INGRESAR</Link>
                    </div>
                </div>
      )
    }
}