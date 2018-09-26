import React from 'react'
import styled from 'styled-components'
import posed from 'react-pose'


const Container = styled(posed.div({
   enter:{
       x:'-50%',
       y:0,
       opacity:1
   },
   exit:{
       y:'-100%',
       opacity:0
   }
        
}))`
    position:absolute;
    bottom:30px;
    height:40px;
    width:300px;
    left:50%;

    
    
`

const Ul = styled(posed.ul({
    
}))`
    list-style:none;
    margin:0;
    padding:0;
    text-align:center;

`
const Elemento = styled(posed.li({
    hoverable:true,
    hover:{
        scale:1.5
    },
    hoverEnd:{
        scale:1
    }
}))`    
    display:inline-block;
    margin-right:30px;
    
    a{
        color:white;
    }
    a:hover{
        color:yellow;
        
    }
`
const Redes = (prop)=>{
    return (
        <Container {...prop}>
            <Ul>
                <Elemento><a href="https://www.facebook.com/luis.solano27"><i className="fa fa-facebook fa-2x"></i></a></Elemento>
                <Elemento><a href="https://twitter.com/gliberte"><i className="fa fa-twitter fa-2x"></i></a></Elemento>
                <Elemento><a href="https://www.youtube.com/channel/UC-oGMEod30SgMQ1JYlMDrtg?view_as=subscriber"><i className="fa fa-youtube fa-2x"></i></a></Elemento>
                <Elemento><a href="mailto:luis.solano.l@gmail.com"><i className="fa fa-envelope fa-2x"></i></a></Elemento>
                
            </Ul>
        </Container>
    )
}

export default Redes