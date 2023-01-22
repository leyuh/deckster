import React, { useState } from 'react';

import './styles/App.css';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { DeckInfo } from './components/DeckInfo';

import Deck from './interfaces/Deck';


function App() {

  const [currPage, setCurrPage] = useState<string>("Home");

  let tempDeck: Deck = {
    "name": "First Deck",
    "cardCount": 2,
    "cards": [["sdf oiasdj oaisdnf aosi ajds oiasd osaidos da", "oias aoisn  dioa oisad iajd oasjd "], ["sdf oiasdj oaisdnf aosi ajds oiasd osaidos da", "oias aoisn  dioa oisad iajd oasjd "]],
    "indexKey": 0
  }
  const [decks, setDecks] = useState<Deck[]>([tempDeck]);

  const [showDeckInfo, setShowDeckInfo] = useState<Deck | null>(null);

  return (
    <div id="app">
      <NavBar/>
      {currPage == "Home" ? <HomePage
        decks={decks}
        setDecks={setDecks}
        showDeckInfo={showDeckInfo}
        setShowDeckInfo={setShowDeckInfo}
      /> : ""}
      {showDeckInfo ? <DeckInfo
        showDeckInfo={showDeckInfo}
        setShowDeckInfo={setShowDeckInfo}
        decks={decks}
        setDecks={setDecks}
      /> : ""}
    </div>
  );
}

export default App;
