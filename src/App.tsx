import React, { useState } from 'react';

import './styles/App.css';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';

import Deck from './interfaces/Deck';


function App() {


  const [currPage, setCurrPage] = useState<string>("Home");

  const [decks, setDecks] = useState<Deck[]>([]);

  return (
    <div id="app">
      <NavBar/>
      {currPage == "Home" ? <HomePage
        decks={decks}
        setDecks={setDecks}
      /> : ""}
    </div>
  );
}

export default App;
