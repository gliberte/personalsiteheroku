import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

//pantallas
import Home from './pantallas/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route exact path="/" component={Home}/>
      </BrowserRouter>
    );
  }
}

export default App;
