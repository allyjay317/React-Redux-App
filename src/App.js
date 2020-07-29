import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>

      </Route>
    </div>
  );
}

export default App;
