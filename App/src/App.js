import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from "./Main.js";
import Connect from './Connect.js'

function App() {
  return (
    <>
    <div className="App">
     <Router>
      <div className="container">
        <Switch>
          <Route exact path='/' component={Main} ></Route>
          <Route path='/Connect' component={Connect} ></Route>
        </Switch>
      </div>
    </Router>
    </div>
   </>
  );
}

export default App;
