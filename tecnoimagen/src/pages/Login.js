import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import BodyLogin from '../components/BodyLogin'

export class Login extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyLogin></BodyLogin>
            <Footer></Footer>
        </div>
        
    );
  } 
}