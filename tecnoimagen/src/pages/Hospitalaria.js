import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {BodyHospitalaria} from '../components/BodyHospitalaria'


export class Hospitalaria extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyHospitalaria></BodyHospitalaria>
            <Footer></Footer>
        </div>
        
    );
  } 
}