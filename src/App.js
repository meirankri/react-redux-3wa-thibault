import React from 'react';
import './App.css';
import Profil from './components/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import login from './components/login';
import detailsUser from './components/detailsUser';
import withAuth from './helpers/withAuth';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         {/**la route est protegé grace a withAuth qui encapsule detailsUser */} 
        <Route exact path="/" component= {withAuth(detailsUser)}/>
        <Route exact path="/login" component= {login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
