import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'
import {NavLink} from 'react-router-dom'

const Container = styled(posed.ul({
    enter:{
        x:0,
        opacity:1,
        delay:500,
        delayChildren:300,
        staggerChildren:300
    },
    exit:{
        x:'100%',
        opacity:0
    }
})) `
    position:absolute;
    top:5%;
    right:0;
    list-style:none;
    z-index:999;
`
const Elemento = styled(posed.li({
    hoverable:true,
    hover:{
        scale:1.4
    },
    hoverEnd:{
        scale:1
    },
    enter:{
        y:0,
        opacity:1
    },
    exit:{
        y:30,
        opacity:0
    }
}))`
    display:inline-block;
    margin-right:50px;
    a{
        font-family: 'Alfa Slab One', cursive;
        color:white;
        text-decoration:none;
        font-size:40px;
    }
    a:hover{
        color:yellow;
        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;
    }
    

    @media (max-width:768px){
        a{
            font-size:27px;
        }
    }
    @media (max-width:414px){
        a{
            font-size:20px;
        }
        margin-bottom:20px;
    }
    @media (max-width:320px){
        a{
            font-size:16px;
        }
        margin-bottom:14px;
    }
`


export default class Menu extends React.Component {
    state = {
        estado:'exit'
    }
    componentDidMount(){
        this.setState({estado:'enter'})
    }
    render() {
        return (
            <Container pose={this.state.estado}>
                <Elemento><NavLink to="/">Home</NavLink></Elemento>
                <Elemento><NavLink to="/proyectos">Proyectos</NavLink></Elemento>
                <Elemento><NavLink to="/acerca">Sobre mi</NavLink></Elemento>
                <Elemento><NavLink to="/contacto">Contacto</NavLink></Elemento>
            </Container>
        )
    }
}