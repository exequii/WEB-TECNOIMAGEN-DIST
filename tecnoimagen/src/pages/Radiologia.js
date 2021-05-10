import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {BodyRadio} from '../components/BodyRadio'


export class Radiologia extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyRadio></BodyRadio>
            <Footer></Footer>
        </div>
        
    );
  } 
}