import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Page1 from './components/page1';
import Signup from './components/signup';
import Dashboard from './components/dashboard';



function App() {
  return (
    
    <Router>
    
    <div className="App">
      <Route exact path="/" component={Page1} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      
      
      
      </div>
    </Router>
    
  );
}

export default App;
