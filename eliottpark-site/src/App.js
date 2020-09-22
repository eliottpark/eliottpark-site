import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Education from './Education.js';
import Overview from './Overview.js';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path='/' component={Home}/>
    </Switch>
  );
}

export default App;
