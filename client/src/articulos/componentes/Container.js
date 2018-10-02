import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width:900px;
margin:0 auto;
padding:60px 200px;
background:rgb(238, 238, 238);
h1{
  color:rgb(46, 49, 49);
}
h2{
  color:rgb(210, 77, 87);
}
h3,h4{
  color:rgb(210, 77, 87);
  font-size:1.6em;
  margin:30px 0;
}
p{
  
  font-family: 'Roboto Condensed', sans-serif;
  font-size:20px;
  line-height:1.5;

}
blockquote{
  color:rgb(103, 128, 159);
  background:rgb(218, 223, 225);
  padding:20px 50px;
  font-size:32px;
  line-height:2;
  font-style:italic;
}
code{
  
  background:rgb(36, 37, 42);
  color:rgba(46, 204, 113,0.8);
  
  width:100%;
  
}
img{
  width:900px;
  display:block;
  margin:0 auto;
}
pre{
  font-family: 'VT323', monospace;
  
  background:rgb(236, 236, 236);
}

@media (max-width:768px){
  width:100%;
  padding:30px 5px;
  blockquote{
    font-size:20px;
    line-height:1;
  }
  img{
    width:100%;
  }
  code{
    font-size:10px;
  }
}


`

export default Container