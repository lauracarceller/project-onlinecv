import Home from '../Home';
import Estudios from '../Estudios';
import Experiencia from '../Experiencia';
import Tecnologias from '../Tecnologias';
import Contacto from '../Contacto';
import './Main.css';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';;




export default class Main extends Component {
  render() {
    return (
        <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/estudios" component={Estudios} />
              <Route path="/experiencia" component={Experiencia} />
              <Route path="/tecnologias" component={Tecnologias} />
              <Route path="/contacto" component={Contacto} />
            </Switch>
        </main>
      )
    }
}