import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import styled from 'styled-components'
import fondo from '../img/fondo_encabezado.jpeg'
import me from '../img/me.jpg'
import Menu from '../componentes/Menu'
import RSociales from '../componentes/RSociales'

const Encabezado = styled(posed.div({
    enter:{
        x:0,
        opacity:1
    },
    exit:{
        x:'-100%',
        opacity:0
    },
    hoverable: true,
    hover: {
        filter: 'blur(2px)'
    },
    hoverEnd: {
        filter: 'blur(0px)'
    }
})) `
    width:100%;
    height:100vh;
    background:url(${fondo}) no-repeat;
    background-size:cover;
    filter:blur(0);
    position:absolute;
    left:0;
    top:0;
`


const ContentEncabezado = styled(posed.div({
    enter:{
        x:0,
        opacity:1,
        delay:500
    },
    exit:{
        x:'-100%',
        opacity:0
    },
}))`
    position: absolute;
    top:5%;
    left:5%;

    @media (max-width:768px){
        top:20%;
        left:42%;
    }
`
const MyPic = styled(posed.img({
    
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.3)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
})) `
    width:120px;
    border-radius:60px;
    @media (max-width:1024px){
        display:none;
    }
    @media (max-width:768px){
        width:130px;
        border-radius:65px;
    }

`
const Nombre = styled(posed.div({
    enter:{
        x:'-50%',
        y:'-50%',
        scale:1,
        delay:500
    },
    exit:{
        scale:0
    }
}))`
    position:absolute;
    top:50%;
    left:50%;
    text-align:center;
    p{
        margin-top:10px;
        color:white;
    }
    p:nth-child(2){
        color:yellow;
        font-size:56px;
        font-family: 'Titan One', cursive;
        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;
    }
    span{
        color:rgb(255, 203, 5);
        font-size:20px;
        font-weight:bold;
    }

    @media (max-width:360px){
        p:nth-child(2){
            font-size:40px;
        }
        span{
            font-size:16px;
        }
    }
`

export default class Home extends React.Component {
    render() {
        return (
            <PoseGroup animateOnMount={true}>
           
                    <Encabezado key="encabezado">

                    </Encabezado>
                    <Menu key='menu'/>
                        
                    <ContentEncabezado key="contentencabezado">
                        <MyPic src={me} />
                    </ContentEncabezado>

                    <Nombre key="nombre">
                        <p><i className="fa fa-area-chart fa-4x"></i></p>
                        <p>Luis Solano</p>
                        <span>Full Stack Web Developer</span>
                    </Nombre>
                    <RSociales key="rsociales"/>
                    
            </PoseGroup>
        )
    }
}