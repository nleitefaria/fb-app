import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './Home.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <div>        
      	<Link to={`/home`}>Home</Link>
      	<Link to={`/about`}>About</Link>  
      	<Switch>        
          	<Route path='/home' component={Home}/>
          	<Route path='/about' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
