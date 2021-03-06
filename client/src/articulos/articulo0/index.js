import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import moment from 'moment'
import Menu from '../../componentes/Menu'
import pic01 from './pic01.png'
import vistamapa from './articulo01.jpg'
import Code from 'react-code-prettify'
import {Share,Follow} from 'react-twitter-widgets'
import Disqus,{CommentCount} from 'disqus-react'

import articulos from '../data'
import Container from '../componentes/Container'
import Fecha from '../componentes/Fecha'
import Encabezado from '../componentes/Encabezado'





export default class articulo1 extends Component {
  static propTypes = {

  }

  render() {
    
    const articulo = articulos.find(articulo => articulo.id === 0)
    const disqusConfig = {
      url:`http://www.luisssolano.com${articulo.url}`,
      identifier:articulo.id,
      title:articulo.titulo
    }
    const code1 = `
    import React, { Component } from 'react';
    import ReactMapboxGl  from 'react-mapbox-gl'

    const Map = ReactMapboxGl({
        accessToken:'aqui va tu default public token'
    })

    class App extends Component {
        render() {
            return (
                &lt;Map 
                    style="mapbox://styles/gliberte/
                    cjj69dxbs18lb2snnh2qainzi" 
                    //debes reemplazar esto 
                    por un estilo propio
                    containerStyle={{
                        height:"100vh",
                        width:"100vw"
                    }}
                />
            );
        }
    }

    export default App;
    `
    const code2 = `
    import ReactMapboxGl,{Layer,Source}  from
     'react-mapbox-gl'
    import MisRiosData from './data.geojson'

    ...
    class App extends Component {
        render() {
            const geojsonOptions = {
                type:'geojson',
                data:MisRiosData
            }
            return (
                &lt;Map 
                    style="mapbox://styles
                    /gliberte/cjj69dxbs18lb2snnh2qainzi" 
                    //debes reemplazar esto por un 
                    estilo propio
                    containerStyle={{
                        height:"100vh",
                        width:"100vw"
                    }}
                >
                    &lt;Layer
                        type="line"
                        paint={
                            {
                                "line-color":"#42A5F5",
                                "line-width":4
                                }
                        }
                        sourceId="rios"
                    />
                    &lt;Source id="rios" 
                    geoJsonSource={geojsonOptions}/>
                &lt;/Map>
            );
        }
    }

    `
    const code3 = `
    &lt;GeoJSONLayer data={MisRiosData}
      linePaint={{
        "line-color":"#42A5F5",
        "line-width":4
      }}
      symbolLayout={
        {
          "text-field":"{nombre}",
          "symbol-placement":"line",
          "text-offset":[0,-1]
        }
      }
    />
    `
    return (
      <PoseGroup animateOnMount={true}>
        <Menu key="menu" />
        <Encabezado key="encabezado">


        </Encabezado>
        <Container key="container">
          <Share url="http://luisssolano.com/articulo0"/>
          <Follow username="gliberte"/>
          <h1>{articulo.titulo}</h1>
          <CommentCount shortname="http-www-luisssolano-com" config={disqusConfig}>
             Comentarios
          </CommentCount>
          <Fecha>{moment(articulo.fecha).format('dddd D [de] MMMM[,] YYYY')}</Fecha>
          <h2>Introduccion</h2>

          <p>
            Siempre es emocionante iniciar la creacion de algo nuevo.
            El oficio de la programación de aplicaciones web tiene estas dos particularidades: emocionante y frustrante.
            Emocionante por cuanto cada vez que escribimos lineas de código para crear una característica y logramos que funcione y
            haga lo que esperábamos, sentimos una oleada de gratificación refrescante; sin embargo,
            las frustraciones siempre estarán a la vuelta de la esquina.
          </p>
          <p>
            En toda mi experiencia personal de aprendizaje en este campo me he dado cuenta que aquellos recursos didácticos que
            resultaron más efectivos para mi se caracterizaban por una metodología de inicio cero.
            En otras palabras, que todo se construía a partir de nada, que nada se asumía. Cada vez que buscaba un tutorial o un
            blog que explicara cómo hacer o construir algo, prefería aquellos recursos que empezaban con el título en inglés:
            "from scratch", es decir, desde cero.
          </p>
          <p>
            Quizás ese no sea el caso para todo el mundo, ya que cada quien tiene sus propias preferencias sobre la mejor forma
            para aprender algo. En todo caso, considero que, en general, siempre es preferible dar la oportunidad de entener
            plenamente algo desde sus fundamentos básicos.
          </p>
          <h2>Qué vamos a construir</h2>
          <blockquote>
            React.js es una libreria creada por Facebook para la creacion de interfaces de usuarios interactivas, basada en componentes.
          </blockquote>

          <p>
            Vamos a crear una aplicación web, utilizando como base para la <b>UI (User Interface)</b> la cada vez más pupular libreria  
            <a href="http://nodejs.org"> Node.js</a>, <a href="https://www.mapbox.com">Mapbox</a> y <a href="http://styled-components.com">styled-components</a>.
            Vamos a requerir un entorno de desarrollo con Node.js.
          </p>
          <h3>Paso Uno: verificar la instalación de Node.js</h3>

          <p>
            Node.js es una plataforma de entorno de desarrollo de servidor para ejecutar Javascript. Esta aplicación demo no va a tener un componente servidor,
            pero sí vamos a utilizar el manejador de paquetes  <a href="https://yarnpkg.com">yarn</a>. Asi que primero nos dirigimos al sitio web de <a href="http://nodejs.org">Node.js</a> y
            seguimos las instrucciones para descarga e instalacion de Node.js. Para verificar la instalacion de Node.js, en la
            linea de comandos, ejecutamos:
          </p>

          <pre>
            node -v
          </pre>
          <p>y el resultado debe ser algo asi como:</p>
          <pre>
            v8.11.1
          </pre>

          <h3>Paso Dos:Instalar yarn (opcional)</h3>
          <p>
            Ahora nos dirigimos al sition web de <a href="https://yarnpkg.com">yarn</a>. Existen varias formas de instalar yarn en las diferentes plataformas y sistemas.
             Incluso, segun el blog <a href="https://datyayu.xyz/blog/posts/yarn">https://datyayu.xyz/blog/posts/yarn</a>, es posible instalar yarn mediante npm (que se instala por defecto una vez instalado Node.js).
             En caso que se prefierea usar <a href="https://www.npmjs.com">npm</a> en lugar de yarn, no es necesario seguir este paso.
          </p>
          <p>
            Confirmamos la instalacion de yarn:
          </p>
          <pre>
            yarn -v
          </pre>
          <p>
            .. y el resultado deberia ser algo asi:
          </p>
          <pre>
            1.7.0
          </pre>
          <h3>Paso Tres: Iniciar la carpeta del proyecto</h3>
          <p>
            Creamoso una carpeta o directorio particular y dentro de ella generamos los archivos necesarios para la configuracion inicial:
          </p>
          <pre>
            mkdir demo <br />
            cd demo <br />
            demo>yarn create react-app client <br />
          </pre>
          <p>
            Este último procedimiento creará los archivos en la subcarpeta <b>client</b>
            Esta es la estrategia preferida para inicar rápidamente a escribir código en una aplicacion React.
            Comprobamos que todo esta bien ejecutando el servidor de pruebas mediante:
          </p>
          <pre>
            cd client <br />
            yarn start <br />
          </pre>
          <p>Se debe abrir el navegador por defecto en nuestro sistema, en la direccion <b>localhost:3000</b>:</p>
          <img src={pic01} alt="" />
          <p>Luego, en nuestro editor de código favorito, abrimos la carpeta de proyecto <b>client</b>. </p>

          <h3>Paso Cuatro: instalar las dependencias necesarias</h3>

          <p>Empezamos por instalar las siguientes dependencias:</p>

          <h4>styled-components</h4>
          <p>
            Styled-components es una dependencia que une el uso de plantillas literales en Javascript y el poder de CSS para crear
            y adjuntar los estilos a los componentes React. Esta es una de las muchas alternativas que hay para incorporar directamente
            propiedades CSS en los archivos Javascript, tendencia conocida como CSS-in-JS. Styled-components es de las más populares y
            utilizadas. Personalmente, es mi opción preferida.
          </p>
          <pre>
            yarn add styled-components
          </pre>
          <h4>Mapbox</h4>
          <p>
            Mapbox, una impresionante libreria para implementar mapas dinámicos en aplicaciones web y móviles.
            Cuenta con una implementacion para React Native también. Mapbox es comercial, y no es barata, pero
            posee una capa gratuita que puede emplearse para el desarrollo de aplicaciones demo, públicas o prototipos.
          </p>
          <pre>
            yarn add react-mapbox-gl mapbox-gl
          </pre>
          <p>
            De esta forma instalamos dos dependencias que se requieren para implementar Mapbox.
            A continuacion, deberemos dirigirnos al sitio web de Mapbox
            para crear una cuenta de usuario que nos permita utilizar un token gratuito de prueba.
          </p>
          <h3>Paso Cinco: implementar la vista del mapa</h3>
          <p>
            A continuacion reemplazamos todo el contenido del archivo <b>App.js</b> que esta dentro de la carpeta <b>src</b> por:
          </p>
          
            <Code codeString={code1} language='javascript'/>
           <p>El navegador se actualizará con esta vista:</p>
           <img src={vistamapa} alt=""/>

           <h3>Paso Seis: Agregando capas de datos</h3>
           <p>
           Vamos a agregar ahora un par de capas de datos sobre nuestro mapa base. Para ello, intentaremos el procedimiento más sencillo.
            Primero crearemos nuestra propia data mediante un servicio externo. Se trata del sitio <a href="http://geojson.io">geojson.io</a>. 
            Esta aplicacion web nos permite crear datos en formato geojson que luego podemos guardar y descargar como archivos a 
            nuestra computadora. Generamos un archivo que denominamos <b>data.geojson</b> (nótese la extension geojson, una especificación 
            basada en json, que permite la descripción geo-espacial de datos), 
           y lo colocamos en la carpeta base del proyecto. Luego importamos los componentes siguientes:
           </p>
           <Code codeString={code2} language='javascript'/>
           <p>
           Los datos geojson almacenados en <b>data.geojson</b> son importados 
           en la vinculacion <b>MisRiosData</b>, que luego se le pasa como propiedad geoJsonSource al 
           componente <b>Source</b>. Las propiedades que podemos  configurar para los componentes <b>Layer</b> y 
          <b>Source</b> se encuentran documentadas en el sitio <a href="https://github.com/alex3165/react-mapbox-gl/blob/HEAD/docs/API.md">https://github.com/alex3165/react-mapbox-gl/blob/HEAD/docs/API.md</a>. Estas propiedades a su vez hacen referencia a la documentación que encontramos en el sitio de <b>Mapbox</b> 
           <a href="https://www.mapbox.com/mapbox-gl-js/api/">https://www.mapbox.com/mapbox-gl-js/api/</a>.
           </p>
           <p>
           Si observamos en el navegador, en este momento el mapa deberia mostrar la nueva capa de datos cargada. 
           Una forma más directa y breve, sin embargo, de hacer esto es utilizando el componente especializado <b>GeoJSONLayer</b>. 
           Todo lo que tenemos que hacer es importar este componente y reemplazar los componentes <b>Layer</b> y <b>Source</b> por:
           </p>
           <Code codeString={code3} language="javascript"
           />

           <p>
           El resultado será el mismo. En mi caso, el tipo de capa geográfica que creé en geojson.io es de lineas.
           </p>
           <Share url={`http://luisssolano.com${articulo.url}`}/>
           <Follow username="gliberte"/>
           <Disqus.DiscussionEmbed shortname="http-www-luisssolano-com" config={disqusConfig} />





        </Container>


      </PoseGroup>
    )
  }
}
