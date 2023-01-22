import React, { Dispatch, SetStateAction } from 'react';
import '../styles/HomePage.css';

interface Deck {
    name: string;
    cardCount: number;
    cards: string[][];
}


interface HomePageProps {
    decks: Deck[];
    setDecks: Dispatch<SetStateAction<(Deck[])>>;
}

export const HomePage: React.FC<HomePageProps> = ({decks, setDecks}) => {
  return (
    <div id="home-page">
        <h1 id="home-page-title">My Decks</h1>
        <div id="decks-display-div">
            {decks.map((val, i) => {
                return <div className="deck-div" id={`deck-div-${i}`} key={i}>
                    {val.name}
                </div>
            })}
        </div>
        <button id="add-deck-button" onClick={() => {
            setDecks((prev) => {
                return [...prev, {
                    "name": "New Deck",
                    "cardCount": 0,
                    "cards": []
                }]
            })
        }}>CREATE NEW</button>
    </div>
  );
}