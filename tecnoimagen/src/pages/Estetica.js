import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {BodyEstetica} from '../components/BodyEstetica'


export class Estetica extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyEstetica></BodyEstetica>
            <Footer></Footer>
        </div>
        
    );
  } 
}