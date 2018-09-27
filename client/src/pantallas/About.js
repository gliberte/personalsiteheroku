import React from 'react'
import styled from 'styled-components'
import posed,{PoseGroup} from 'react-pose'
import Menu from '../componentes/Menu'
import me from '../img/me.jpg'
import fondo from '../img/fondo_proyectos2.jpeg'

const Container = styled(posed.section({
    enter:{
        scale:1,
        opacity:1
    },
    exit:{
        scale:0,
        opacity:0
    }
}))`
    
    display:flex;
    justify-content:center;
    background:rgb(36, 37, 42);

    

    
`

const InnerContent = styled(posed.div({
    enter:{
        x:0,
        y:200,
        opacity:1
    },
    exit:{
        x:30,
        y:30,
        opacity:0
    }
}))`
    
    line-height:1.4;
    border:1px solid white;
    width:900px;
    display:flex;
    margin-bottom:200px;

    @media (max-width:414px){
        flex-direction:column;
        border:none;
        margin-bottom:100px;
    }

`
const ImageContainer = styled.div`
    padding:20px;
    img{
        width:200px;
    }

    @media (max-width:414px){
        text-align:center;
        
        img{
            width:150px;
            border-radius:75px;
        }
    }
    
`
const TextContainer = styled.div`
    padding:30px;
    h2{
        color:rgb(25, 181, 254);
        font-family: 'Carter One', cursive;
        font-size:28px;
    }
    p{
        color:rgb(210, 215, 211);
        text-align:justify;
        text-indent:50px;
        font-family: 'Viga', sans-serif;

        text-shadow:4px 4px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px  1px 0 #000,
        1px  1px 0 #000;
        
    }
    a{
        color:rgb(247, 202, 24);
    }

    @media (max-width:360px){
        h2{
            font-size:20px;
        }
    }
`

export default class About extends React.Component{
    render() {
      return (
        <PoseGroup animateOnMount={true}>
            <Menu key="menu"/>
          <Container key="container">
                <InnerContent>
                    <ImageContainer>
                        <img src={me} alt=""/>
                    </ImageContainer>
                    <TextContainer>
                        <h2>Quien soy</h2>
                        <p>Nací en  <a href="https://en.wikipedia.org/wiki/Nicaragua" target="_blank">Nicaragua</a>. 
                        Vivo en Panamá desde 1988 al mudarme con mi familia cuando tenía 16 años. 
                            Estudié bachillerato en ciencias en la <a href="https://www.facebook.com/secundariapps/" target="_blank">Escuela Secundaria Pedro Pablo Sánchez</a>  de La Chorrera, donde tuve el orgullo de 
                            graduarme entre los primeros 20 puestos distinguidos. 
                            En aquel entonces implementaron un laboratorio de cómputo en la escuela en donde recibí mis primeras lecciones. Aprendí esos mágicos comandos que abrian mundos de posibilidades: "copy *.* A:B". 
                            En ese tiempo me enamoré de aquellas aplicaciones con interfaces oscuras, tales como "WordStar", "Lotus 1 2 3",etc.  Fue amor a primera vista.
                        </p>
                        <p>Ingresé a la Universidad de Panamá para estudiar Licenciatura en Matemática con la idea de 
                            dedicarme a la docencia. Mala idea para un extranjero. La programación siempre fue de mucho interés para mi. En la universidad invertía más del tiempop necesario en los laboratorios de informática, después de las clases regulares 
                            del curso de programación con Turbo Basic para la aplicaciones de métodos numéricos, y jugaba con los compiladores. 
                            Mi primer programa fue un juego de apuestas de carreras de caballos simulada. Al terminar la licenciatura en matemáticas quice iniciar la carrera de ingiería informática. Pero mi situación económca como adulto y el de mi familia ya no me permitieron concretar esa idea.
                            Tuve que hacerme a la idea de buscar empleo y olvidarme por el momento de la informática.
                        </p>    
                        <p>
                            Los empleos para un extranjero en docencia eran muy escasos. Al recibir mi diploma busqué trabajo dictando cursos sobre computadoras (MS-DOS,Word,Excel,WordPerfect,Window 3.11,etc). Luego, conseguí trabajo como 
                            profesor de Informática y de matemáticas en algunas escuelas privadas. Finalmente, decidí que la profesion de docente no era para mi, asi que empecé a complementar mis conocimientos sobre 
                            computadoras por mi propia cuenta. Aprendí a usar programas informáticos sobre GIS (Geographic Information Systems) y los rudimentos sobre esa apacionante disciplina.
                            Entré a trabajar en la desaparecida empresa Geoinfo S.A. y luego busqué empleo en Barraza y Cia, donde actualmente sigo laborando desde hace 9 años.
                        </p>
                        <p>
                            Con la evolución de las tecnologías de desarrollo web, y la creciente importancia de la nube como 
                            ambiente de desarrollo, me fue capacitando por mi cuenta en la programación con Javascript,HTML y CSS. Luego 
                            seguí con NodeJs para el ambiente de servidor. Me auto denomino un  <a href="https://www.youtube.com/watch?v=UtDpYVf9jKU" target="_blank">Full Stack Web Developer</a> , pero definitivamente tengo mucho 
                            por aprender en este cambiante mundo de la programación de aplicaciones web y las tecnologías asociadas.
                        </p>
                    </TextContainer>
                    
                </InnerContent>
                
          </Container>
        </PoseGroup>
      )
    }
}