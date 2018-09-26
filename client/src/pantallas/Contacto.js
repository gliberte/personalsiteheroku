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
        scale:1,
        opacity:1,
        delay:700
    },
    exit:{
        scale:0,
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

    @media (max-width:414px){
        h1{
            font-size:17px;
        }
        width:100%;
        top:55%;
        height:300px;
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
            height:60px;
        }

        fieldset label{
            font-size:15px;
        }
    }

    
    
`
const BotonEnviar = styled(posed.button({
    pressable:true,
    press:{
        scale:0.8,
        background:'rgba(107, 185, 240)'
    },
    pressEnd:{
        scale:1,
        background:'rgb(31, 58, 147)'
    }
}))`
    width:100%;
    height:50px;
    border:none;
    background:rgb(31, 58, 147);
    color:yellow;
    cursor:pointer;
    font-family: 'Titan One', cursive;

    
    
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
                        <fieldset>
                            <BotonEnviar type="button">Enviar</BotonEnviar>
                        </fieldset>
                        


                    </Formulario>
                </FormularioContainer>
                    


                </Encabezado>
            </PoseGroup>
        )
    }
}