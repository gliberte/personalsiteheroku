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
import Articulo01 from '../src/articulos/articulo01'
// import ReactGA from 'react-ga';

// ReactGA.initialize('UA-125428278-1');

const TheArticles = {
  0:Articulo0,
  1:Articulo01
}
const Contenedor = styled.div`

`

class App extends Component {
  
  render() {
    // const fireTracking = ()=>{
    //   console.log(window.location.hash)
    //   ReactGA.pageview(window.location.hash)
    // }
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/proyectos" component={Proyectos} />
          <Route path="/acerca" component={About} />
          <Route path="/blog" component={Blog} />

          {articulos.map(articulo=>{
            console.log(articulo)
            return <Route key={articulo.id} path={articulo.url} component={TheArticles[articulo.id]}/>
          })}

        </React.Fragment>

      </BrowserRouter>
    );
  }
}

export default App;
