import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Homepage from './components/homepage';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Header from './components/header';



function App() {
  return (
    
    <Router>
     <Header/>
    <div className="App">
    
      <Route exact path="/" component={Homepage} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      
      
      
      </div>
    </Router>
    
  );
}

export default App;
