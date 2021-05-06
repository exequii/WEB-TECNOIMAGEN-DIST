import React, { Component } from 'react'
import logo2 from '../images/logo2.png'
import {Link} from 'react-router-dom'

export class BodyContent extends Component {
    render(){
      return (
                <div className="bodyContent">
                    <div>
                        <img src={logo2}></img>
                    </div>

                    <div>

                    </div>
                </div>
      )
    }
}