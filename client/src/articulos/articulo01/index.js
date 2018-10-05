import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import moment from 'moment'
import Menu from '../../componentes/Menu'
import Code from 'react-code-prettify'
import { Share, Follow } from 'react-twitter-widgets'
import Disqus, { CommentCount } from 'disqus-react'

import articulos from '../data'
import Container from '../componentes/Container'
import Fecha from '../componentes/Fecha'
import Encabezado from '../componentes/Encabezado'



export default class Articulo02 extends React.Component {
  render() {
    const articulo = articulos.find(articulo => articulo.id === 1);
    const disqusConfig = {
      url: `http://www.luisssolano.com${articulo.url}`,
      identifier: articulo.id,
      title: articulo.titulo
    }
    return (
      <PoseGroup animateOnMount={true}>
        <Menu key="menu" />
        <Encabezado key="encabezado" />
        <Container key="container">
          <Share url="http://luisssolano.com/articulo0" />
          <Follow username="gliberte" />
          <h1>{articulo.titulo}</h1>
          <CommentCount shortname="http-www-luisssolano-com" config={disqusConfig}>
            Comentarios
          </CommentCount>
          <Fecha>{moment(articulo.fecha).format('dddd D [de] MMMM[,] YYYY')}</Fecha>

          <h2>Continuación...</h2>
          <p>
            Los mapas y la cartografía en general siempre me han gustado. Los mapas proporcionan contexto a nuestra vida, y 
            sentido de pertenencia y orientación. Un mapa puede significar la diferencia entre la vida y la muerte para un explorador o 
            un marinero. ¿Para qué nos sirven los mapas al resto de nosotros?
          </p>
          <p>
            Los negocios necesitan los mapas para analizar sus ventas por regiones. Los biólogos requieren mapas digitales para llevar un registro 
            georeferenciado de las especies animales y vegetales que estudian, sus movimientos migratorios,etc. El estudio de los brotes de epidemias, 
            la desigualdad económica, los recursos naturales, etc. Inumerables son las aplicaciones. Como programador de aplicaciones, ¿Qué herramientas hay 
            disponibles para crear aplicaciones con mapas digitales? ¿Podemos crear una aplicacion que compita con Google Maps? ¿o que haga lo que Google Map no hace?.

          </p>
          <iframe  src="https://www.youtube.com/embed/dSdbeIhtrUM" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <p>
            Crear datos geográficos es muy sencillo con geojson.io. En el video demuestro lo fácil que es utilizar su interface. Otra herramienta que 
            estoy probando durante el video es <a href="https://github.com/nitin42/react-color-tools/tree/master/docs">react-color-tools</a>. Anteriormente usaba 
            <a href="https://casesandberg.github.io/react-color/"> React Color</a>; pero esta nueva dependencia agrega características muy útiles. 
          </p>
          


          <Share url={`http://luisssolano.com${articulo.url}`}/>
           <Follow username="gliberte"/>
           <Disqus.DiscussionEmbed shortname="http-www-luisssolano-com" config={disqusConfig} />

        </Container>
      </PoseGroup>
    )
  }
}