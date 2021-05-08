import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {BodyUltra} from '../components/BodyUltra'


export class Ultrasonido extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyUltra></BodyUltra>
            <Footer></Footer>
        </div>
        
    );
  } 
}