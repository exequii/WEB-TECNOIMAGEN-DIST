import './App.css'

import { Component } from 'react';

import {Home} from './pages/Home'
import {Login} from './pages/Login';
import {NotFound} from './pages/NotFound'
import {Content} from './pages/Content'
import {Ultrasonido} from './pages/Ultrasonido'
import {Radiologia} from './pages/Radiologia'
import {Estetica} from './pages/Estetica'
import {Hospitalaria} from './pages/Hospitalaria'

import {Switch, Route} from 'react-router-dom'



export default class App extends Component {
//function App(){
  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path= '/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/content' component={Content} />
            <Route path='/ultrasonido' component={Ultrasonido} />
            <Route path='/radiologia' component={Radiologia} />
            <Route path='/estetica' component={Estetica} />
            <Route path='/hospitalaria' component={Hospitalaria} />
            <Route component={NotFound} /> 
          </Switch>
      </div>
    );
  } 
}

//export default App;
