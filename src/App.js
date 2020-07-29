import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import SearchResults from './components/Body/SearchResults';
import CharacterPage from './components/Body/Character/CharacterPage';

import { testData } from './testData'



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <SearchResults />
      </Route>
      <Route path='/character/:id'>
        <CharacterPage data={testData} />
      </Route>
    </div>
  );
}

export default App;
