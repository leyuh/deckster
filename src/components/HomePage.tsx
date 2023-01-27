import React, { Dispatch, SetStateAction } from 'react';
import '../styles/HomePage.css';

import Deck from '../interfaces/Deck';

interface HomePageProps {
    decks: Deck[];
    setDecks: Dispatch<SetStateAction<(Deck[])>>;
    showDeckInfo: Deck | null;
    setShowDeckInfo: Dispatch<SetStateAction<(Deck | null)>>;
}

export const HomePage: React.FC<HomePageProps> = ({decks, setDecks, showDeckInfo, setShowDeckInfo}) => {
  return (
    <div id="home-page">
        <div id="decks-display-div">
            {decks.map((val, i) => {
                return <div className="deck-div" id={`deck-div-${i}`} onClick={() => {
                    setShowDeckInfo(val);
                }} key={i}>
                    {val.name}
                </div>
            })}
        </div>
        <button id="add-deck-button" onClick={() => {
            setDecks((prev) => {
                return [...prev, {
                    "name": "New Deck",
                    "cardCount": 0,
                    "cards": [],
                    "indexKey": prev.length != 0 ? (prev[prev.length - 1].indexKey + 1) : 0
                }]
            })
        }}> + CREATE NEW + </button>
    </div>
  );
}