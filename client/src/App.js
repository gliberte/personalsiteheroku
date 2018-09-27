import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

//pantallas
import Home from './pantallas/Home'
import Contacto from './pantallas/Contacto'
import Proyectos from './pantallas/Proyectos'
import About from './pantallas/About'
import Blog from './articulos'

import articulos from '../src/articulos/data'

//articulos
import Articulo0 from '../src/articulos/articulo0'

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
          <Route path="/acerca" component={About} />
          <Route path="/blog" component={Blog} />

          {<Route path={articulos[0].url} component={Articulo0} />}

        </React.Fragment>

      </BrowserRouter>
    );
  }
}

export default App;
