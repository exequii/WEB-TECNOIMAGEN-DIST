import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {BodyContent} from '../components/BodyContent'


export class Hospitalaria extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyContent></BodyContent>
            <Footer></Footer>
        </div>
        
    );
  } 
}