import React, { Component } from 'react'

import {NavBar} from '../components/NavBar'
import {Footer} from '../components/Footer'
import {BodyError} from '../components/BodyError'


export class NotFound extends Component {

  render(){

    return (
        <div>
            <NavBar></NavBar>
            <BodyError></BodyError>
            <Footer></Footer>
        </div>
        
    );
  }
}
