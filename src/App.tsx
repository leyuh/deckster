import React, { useState } from 'react';

import './styles/App.css';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';


function App() {


  const [currPage, setCurrPage] = useState<string>("Home");

  const [decks, setDecks] = useState([
    {
      "name": "Example Deck",
      "cardCount": 13,
      "cards": [["front1", "back1"], ["front2", "back2"]],
    },
    {
      "name": "Example Deck",
      "cardCount": 13,
      "cards": [["front1", "back1"], ["front2", "back2"]],
    }
  ]);

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
