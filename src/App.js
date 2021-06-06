import LoginComponent from './components/LoginComponent/LoginComponent';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CadastroComponent from './components/CadastroComponent/CadastroComponent';
import CadastroVeiculoComponent from './components/CadastroVeiculoComponent/CadastroVeiculoComponent';
import { Component } from 'react';
import ListVeiculoComponent from './components/ListVeiculoComponent/ListVeiculoComponent';

class App extends Component {
  render(){
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CadastroComponent/>
        </Route>
        <Route path="/login">
          <LoginComponent/>
        </Route>
        <Route path="/veiculo">
          <CadastroVeiculoComponent/>
        </Route>
        <Route path="/home">
          <ListVeiculoComponent/>
        </Route>
      </Switch>
    </Router>
  );
 }
}

export default App;
