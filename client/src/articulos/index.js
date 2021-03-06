import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { Link } from 'react-router-dom'
import Menu from '../componentes/Menu'
import fondo from '../img/fondoblog.jpeg'
import moment from 'moment'
import articulos from './data'


const Encabezado = styled(posed.section({

})) `
  height:400px;
  background:url(${fondo}) no-repeat center center;
  background-size:cover;

  @media (max-width:375px){
    height:200px;
  }

`
const Container = styled(posed.section({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  }
})) `
  width:900px;
  margin:0 auto;

  @media (max-width:768px){
    width:100%;
  }

`

const ListaArticulos = styled(posed.ul({})) `
  margin:0;
  padding:0 20px;
  list-style:none;
  

  @media (max-width:375px){
    margin-top:50px;
  }

  
`
const ItemArticulo = styled(posed.li({
  enter: {
    scale: 1,
    opacity: 1,
    delay: 400
  },
  exit: {
    scale: 0,
    opacity: 0
  }
})) `
  margin:50px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  

  a{
    color:white;
    font-size:30px;
    text-decoration:none;
  }
  small{
    display:block;
    color:rgb(218, 223, 225);
    font-style:italic;
  }
  img{
    width:200px;
    display:block;
    margin-right:20px;
  }
  @media (max-width:768px){

    a{
      font-size:20px;
    }
  }
  @media (max-width:375px){
    flex-direction:column;
    img{
      width:80%;
      margin-bottom:10px;
    }
    a{
      font-size:14px;
    }
    small{
      font-size:10px;
    }
  }
  
`


export default class Articulos extends Component {
  static propTypes = {

  }

  render() {
    return (
      <PoseGroup animateOnMount={true}>
        <Menu key="menu" />
        <Encabezado key="encabezado"></Encabezado>
        <Container key="container">
          <ListaArticulos>

            {articulos.sort((a,b)=>moment(b.fecha)-moment(a.fecha)).map(articulo => {
              return (
                <ItemArticulo key={articulo.id}>

                  <img src={require(`.${articulo.url}/${articulo.img}`)} alt="" />
                  <div>
                    <Link to={articulo.url}>{articulo.titulo}</Link>
                    <small>{moment(articulo.fecha).format('lll')}</small>
                  </div>


                </ItemArticulo>
              )
            })}


          </ListaArticulos>
        </Container>
      </PoseGroup>
    )
  }
}
