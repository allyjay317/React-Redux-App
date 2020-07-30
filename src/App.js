import React from 'react';
import './App.css';
import { Route } from 'react-router';
import Header from './components/Header/Header';
import SearchResults from './components/Body/Root/SearchResults';
import CharacterPage from './components/Body/Character/CharacterPage';

import { testData } from './testData'
import { CharacterPageSkeleton, SearchResultsSkeleton } from './utilities/skeletons';



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
      <Route path='/skeletoncharacter'>
        <CharacterPageSkeleton />
      </Route>
      <Route path='/skeletonsearch'>
        <SearchResultsSkeleton />
      </Route>
    </div>
  );
}

export default App;
