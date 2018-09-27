import React, { Component } from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import PropTypes from 'prop-types'
import fondo from '../img/fondo_proyectos2.jpeg'

import barraza from '../img/barraza.jpg'
import yarisite from '../img/yarisite.jpg'
import Hildesite from '../img/hildesite.jpg'

import Menu from '../componentes/Menu'

const Encabezado = styled(posed.section({
    enter: {
        scale: 1,
        opacity: 1
    },
    exit: {
        scale: 0,
        opacity: 0
    }
})) `
    width:100%;
    height:500px;
    background:url(${fondo}) no-repeat;
    background-size:cover;
    position:relative;

    @media (max-width:375px){
        height:350px;
    }
`
const Titulo = styled(posed.div({
    enter: {
        x: '-50%',
        y: '-50%',
        scale: 1,
        opacity: 1
    },
    exit: {
        x: 0,
        y: 0,
        scale: 0,
        opacity: 0
    }
})) `
    position:absolute;
    top:50%;
    left:50%;
    h1{
        text-align:center;
        text-transform:uppercase;
        font-family: 'Viga', sans-serif;
        color:rgb(0, 181, 204);
        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;

    }
    @media (max-width:375px){
        h1{
            font-size:22px;
        }
        top:55%;
    }
`
const Contenido = styled.section`
    width:90%;
    margin:0 auto;
    background:rgba(242, 241, 239,1);

    @media (max-width:768px){
        width:100%;
    }
`

const ItemPortaforlio = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:30px 10px;
    margin:100px auto;
    border-bottom:1px solid #ccc;

    h2{
        font-family: 'Alfa Slab One', cursive;
    }

    @media (max-width:1024px){
        grid-template-columns:1fr;
        margin:50px auto;
    }
    @media (max-width:360px){
        h2{
            font-size:20px;
        }
    }
    
`

const Descripcion = styled.p`
    padding:30px;
    font-family: 'Viga', sans-serif;

    @media (max-width:768px){
        padding:5px;
    }
`
const Tecnologias = styled.div`
    display:flex;
    flex-wrap:wrap;
    background:#B0BEC5;
    padding:10px;
    p{
        background:#26A69A;
        height:40px;
        line-height:40px;
        margin-right:10px;
        padding:0 10px;
        border-radius:7px;
        transition:0.3s;
        
    }
    p a{
        color:white;
    }
    p:hover{
        box-shadow:0 5px 7px 0 rgba(0,0,0,0.6);
    }

    

`
const ContainerImage = styled(posed.div({
    hoverable:true,
    hover:{
        scale:1.1
    },
    hoverEnd:{
        scale:1
    }
}))`
    box-shadow:0 5px 7px 0 rgba(0,0,0,0.6);
    margin:0 50px;
    a img{
        width:100%;
    }
    
    @media (max-width:768px){
        margin:20px 0;
        width:100%;

    }
`


export class Proyectos extends Component {
    static propTypes = {

    }

    render() {
        return (
            <PoseGroup animateOnMount={true}>
                <Menu key="menu" />
                <Encabezado key="encabezado">
                    <Titulo key="titulo">
                        <h1>Algunos de mis Proyectos</h1>
                    </Titulo>
                </Encabezado>
                <Contenido key="contenido">
                    <ItemPortaforlio>

                        <div>
                            <h2>El Bochinchoso, WebSite de caricaturas</h2>
                            <Descripcion>Sitio y aplicación web con contenido servido mediante modernas tecnologías web tales como React.js, GraphQL, MongoDb y Node.js. Mas que un sitio web,
                                es una aplicación web dinámica. Los usuarios que se registran pueden marcar sus caricaturas favoritas. El trabajo artístico pertenece al genial caricaturista panameño
                                Hildebrando Sucre. Sus caricaturas y ocurrencias son de corte político - social.
                            </Descripcion>
                            <Tecnologias>
                                <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                                <p><a href="http://nodejs.org" target="_blank">Node.js</a></p>
                                <p><a href="http://graphql.org" target="_blank">GraphQL</a></p>
                                <p><a href="http://heroku.com" target="_blank">Heroku</a></p>
                                <p><a href="http://cloudinary.com" target="_blank">Cloudinary</a></p>
                            </Tecnologias>
                            <a href="http://www.elbochinchoso.com">Visítalo Aqui</a>
                        </div>


                        <ContainerImage> <a href="https://youtu.be/PgLM_RzmKB8" target="_blank"><img src={Hildesite} alt="yarisite" /></a></ContainerImage>
                    </ItemPortaforlio>

                    <ItemPortaforlio>
                        <div>
                            <h2>Mapa Interactivo para análisis de ventas</h2>
                            <Descripcion>Aplicacion web de uso interno para análsis de ventas por regiones.
                                La aplicación esta conformada por una capa servidor en Node.Js que se conecta
                                a una base de datos transaccional en SQL Server. Utiliza el API de desarrollo de MapBox Gl.
                        </Descripcion>
                            <Tecnologias>
                                <p><a href="http://nodejs.org" target="_blank">Node.js</a></p>
                                <p><a href="http://graphql.org" target="_blank">GraphQL</a></p>
                                <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                                <p><a href="http://mapbox.com" target="_blank">MapBox</a></p>
                            </Tecnologias>
                        </div>




                        <ContainerImage> <a href="https://youtu.be/eopJSG9d6zs" target="_blank"><img src={barraza} alt="barraza" /></a></ContainerImage>
                    </ItemPortaforlio>
                    <ItemPortaforlio>

                        <div>
                            <h2>Web Site personal y portafolio</h2>
                            <Descripcion>Sencillo website para una profesional en diseño gráfico. Portafolio de trabajo. Desplegado en produccion a través de Netlify
    
                        </Descripcion>
                            <Tecnologias>

                                <p><a href="http://reactjs.org" target="_blank">React.js</a></p>
                                <p><a href="http://netlify.com" target="_blank">Netlify</a></p>
                            </Tecnologias>
                            <a href="https://nervous-panini-12047b.netlify.com">Visítalo Aqui</a>
                        </div>



                        <ContainerImage> <a href="https://youtu.be/4TSw7wAo2G8" target="_blank"><img src={yarisite} alt="yarisite" /></a></ContainerImage>
                    </ItemPortaforlio>
                </Contenido>


            </PoseGroup>
        )
    }
}

export default Proyectos
