import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import { BodyHome } from '../components/BodyHome'



export class Home extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyHome></BodyHome>
            <Footer></Footer>
        </div>
        
    );
  } 
}