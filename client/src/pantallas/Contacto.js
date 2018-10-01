import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import gracias from '../img/gracias_mensaje.jpeg'
import error from '../img/error_mensaje.jpeg'


import Menu from '../componentes/Menu'

const REGISTRAR_CONTACTO = gql`
    mutation registrarContacto($email:String,$mensaje:String){
        registrarContacto(email:$email,mensaje:$mensaje){
            email
            mensaje
        }
    }
`
const Encabezado = styled(posed.div({
    enter: {
        x: 0,
        opacity: 1
    },
    exit: {
        x: '-100%',
        opacity: 0
    }
})) `
    width:100%;
    height:100vh;
    background:rgb(1, 50, 67);
`
const FormularioContainer = styled(posed.div({
    enter: {
        x: '-50%',
        y: '-50%',
        scale: 1,
        opacity: 1,
        delay: 700
    },
    exit: {
        scale: 0,
        opacity: 0
    }
})) `

    width:400px;
    position:absolute;
    top:70%;
    left:50%;

    

    @media (max-width:414px){
        h1{
            font-size:17px;
        }
        width:100%;
        top:55%;
        height:300px;
    }
    
`
const Titulo = styled.h1`
    text-align:center;
        font-family: 'Viga', sans-serif;
        color:rgb(0, 181, 204);
        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;
        @media (max-width:414px){
        h1{
            font-size:17px;
        }
       
    }
        

`
const Formulario = styled.form`
    background:white;
    padding:20px;
    box-shadow:5px 7px 10px 0 rgba(0,0,0,0.7);
    border-radius:20px;
    fieldset{
        border:none;
    }
    fieldset label{
        display:block;
        margin-bottom:10px;
        font-family: 'Titan One', cursive;
        
    }
    fieldset input,textarea{
        padding:12px 20px;
        width:100%;
        box-sizing:border-box;
    }


    @media (max-width:414px){
        border-radius:0;
        fieldset input,textarea{
            border:1px solid rgba(228, 241, 254,0.7);
        }
        fieldset input{
            height:25px;
            
        }
        fieldset textarea{
            height:30px;
        }

        fieldset label{
            font-size:15px;
        }
    }

    
    
`
const BotonEnviar = styled(posed.button({
    pressable: true,
    press: {
        scale: 0.8,
        background: 'rgba(107, 185, 240)'
    },
    pressEnd: {
        scale: 1,
        background: 'rgb(31, 58, 147)'
    }
})) `
    width:100%;
    height:50px;
    border:none;
    background:rgb(31, 58, 147);
    color:yellow;
    cursor:pointer;
    font-family: 'Titan One', cursive;

    
    
`

const Confirmacion = styled(posed.div({
    enter: {
        x: '-50%',
        y: '-50%',
        scale: 1
    },
    exit: {
        x: 0,
        y: 0,
        scale: 0
    }
})) `
    width:400px;
    position:absolute;
    top:50%;
    left:50%;
    text-align:center;
    
    h1{
        text-align:center;
    }
    img{
        width:200px;

    }
`

export default class Contacto extends React.Component {
    constructor(props) {
        super(props)
        this.email = React.createRef()
        this.mensaje = React.createRef()
    }
    render() {
        return (
            <PoseGroup animateOnMount={true}>
                <Menu key="menu" />
                <Encabezado key="encabezado">

                    <Mutation mutation={REGISTRAR_CONTACTO}>
                        {(registrarContacto, { loading, error, data }) => {
                            if (loading) return null
                            if (error) return (
                                <Confirmacion>
                                    <img src={error} alt=""/>
                                    <Titulo>Algo salio mal. ¿Quisieras intentarlo de nuevo?</Titulo>
                                </Confirmacion>
                            )
                            if (data && data.registrarContacto) {
                                return (
                                    <PoseGroup animateOnMount={true}>
                                        <Confirmacion key="confirmacion">
                                            <img src={gracias} alt=""/>
                                            <Titulo>Gracias. En breve me pondré en contacto contigo.</Titulo>
                                        </Confirmacion>
                                    </PoseGroup>

                                )
                            }
                            return (
                                <FormularioContainer>
                                    <Titulo>Dejame tu email y tu mensaje para contactarte conmigo</Titulo>
                                    <Formulario onSubmit={(evt) => {
                                        evt.preventDefault()

                                        if (this.email.current.value && this.mensaje.current.value) {
                                            registrarContacto({
                                                variables: {
                                                    email: this.email.current.value,
                                                    mensaje: this.mensaje.current.value
                                                }
                                            })
                                            this.mensaje.current.value = ""
                                            this.email.current.value = ""

                                        }
                                    }}>
                                        <fieldset>
                                            <label htmlFor="email">To Email:</label>
                                            <input type="email" id="email" ref={this.email} />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="mensaje">Tu Mensaje:</label>
                                            <textarea name="mensaje" id="mensaje" cols="30" rows="10" ref={this.mensaje}>
                                            </textarea>
                                        </fieldset>
                                        <fieldset>
                                            <BotonEnviar type="submit">Enviar</BotonEnviar>
                                        </fieldset>

                                    </Formulario>
                                </FormularioContainer>

                            )

                        }}
                    </Mutation>


                </Encabezado>
            </PoseGroup>
        )
    }
}