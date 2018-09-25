import React from 'react'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'

import Menu from '../componentes/Menu'
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
    enter:{
        x:'-50%',
        y:'-50%',
        opacity:1,
        delay:200
    },
    exit:{
        x:'-100',
        opacity:0
    }
})) `

    width:400px;
    position:absolute;
    top:50%;
    left:50%;

    h1{
        text-align:center;
        font-family: 'Viga', sans-serif;
        color:rgb(0, 181, 204);
        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;

    }
    
`
const Formulario = styled.form`
    
    fieldset{
        border:none;
    }
    fieldset label{
        display:block;
        margin-bottom:10px;
        font-family: 'Titan One', cursive;
        color:white;
    }
    fieldset input,textarea{
        padding:12px 20px;
        width:100%;
        box-sizing:border-box;
    }
`

export default class Contacto extends React.Component {
    render() {
        return (
            <PoseGroup animateOnMount={true}>
                <Menu key="menu" />
                <Encabezado key="encabezado">
                <FormularioContainer>
                    <h1>Dejame tu email y tu mensaje para contactarte conmigo</h1>
                    <Formulario action="">
                        <fieldset>
                            <label htmlFor="email">To Email:</label>
                            <input type="email" id="email" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="mensaje">Tu Mensaje:</label>
                            <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                        </fieldset>


                    </Formulario>
                </FormularioContainer>
                    


                </Encabezado>
            </PoseGroup>
        )
    }
}