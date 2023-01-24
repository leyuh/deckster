import React, { useState } from 'react';

import './styles/App.css';

import { NavBar } from './components/NavBar';
import { HomePage } from './components/HomePage';
import { DeckInfo } from './components/DeckInfo';
import { CardEditor } from './components/CardEditor';

import Deck from './interfaces/Deck';


function App() {

  const [currPage, setCurrPage] = useState<string>("Home");

  const [decks, setDecks] = useState<Deck[]>([]);

  const [showDeckInfo, setShowDeckInfo] = useState<Deck | null>(null);

  const [showCardEditor, setShowCardEditor] = useState<number | null>(null);

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
        setShowCardEditor={setShowCardEditor}
      /> : ""}
      {(showDeckInfo != null && showCardEditor != null) ? <CardEditor
        showDeckInfo={showDeckInfo}
        setShowDeckInfo={setShowDeckInfo}
        decks={decks}
        setDecks={setDecks}
        showCardEditor={showCardEditor}
        setShowCardEditor={setShowCardEditor}
      /> : ""}
    </div>
  );
}

export default App;
