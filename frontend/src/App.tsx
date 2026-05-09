import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimeList } from './components/AnimeList';
import { AnimeForm } from './components/AnimeForm';
import { AnimeSearch } from './components/AnimeSearch';

function App() {
  return (
    <div>
      <h1>Anime Tracker</h1>
      <AnimeList />
      <AnimeForm />
      <AnimeSearch />
    </div>
  );
}

export default App;
