import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

//pantallas
import Home from './pantallas/Home'
import Contacto from './pantallas/Contacto'
import Proyectos from './pantallas/Proyectos'

const Contenedor = styled.div`

`

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/proyectos" component={Proyectos} />
        </React.Fragment>

      </BrowserRouter>
    );
  }
}

export default App;
