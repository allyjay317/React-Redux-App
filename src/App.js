import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import SearchResults from './components/Body/SearchResults';



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <SearchResults />
      </Route>
    </div>
  );
}

export default App;
