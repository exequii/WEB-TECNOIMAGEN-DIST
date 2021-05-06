import './App.css'

import { Component } from 'react';

import {Home} from './pages/Home'
import {Contenido} from './pages/Contenido';
import {NotFound} from './pages/NotFound'

import {Switch, Route} from 'react-router-dom'



class App extends Component {

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path= '/' component={Home} />
          <Route path='/content' component={Contenido} />
          <Route component={NotFound} /> 
        </Switch>
      </div>
    );
  } 
}

export default App;
