import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import fondo from '../../img/fondoblog.jpeg'

const Encabezado = styled(posed.section({

})) `
  height:400px;
  background:url(${fondo}) no-repeat center center;
  background-size:cover;

  @media (max-width:375px){
    height:200px;
  }


`

export default Encabezado