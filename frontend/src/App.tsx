import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AnimeList } from './components/AnimeList';
import { AnimeForm } from './components/AnimeForm';
import { AnimeEditForm } from './components/AnimeEditForm';

function App() {
  return (
    <div>
      <h1>Anime Tracker</h1>
      <AnimeList />
      <AnimeForm />
    </div>
  );
}

export default App;
