import React, { Dispatch, SetStateAction, useState } from 'react';

import Deck from '../interfaces/Deck';

import '../styles/DeckInfo.css';

interface DeckInfoProps {
    showDeckInfo: Deck | null;
    setShowDeckInfo: Dispatch<SetStateAction<(Deck | null)>>;
    decks: Deck[];
    setDecks: Dispatch<SetStateAction<(Deck[])>>;
}

export const DeckInfo: React.FC<DeckInfoProps> = ({showDeckInfo, setShowDeckInfo, decks, setDecks}) => {

    const [renaming, setRenaming] = useState<boolean>(false);

    return <div id="deck-info">
        <button id="close-deck-info-btn" onClick={() => {
            setShowDeckInfo(null);
        }}>&lt;</button>
        <h1 id="deck-info-title">{showDeckInfo ? showDeckInfo.name : ""}</h1>
        {renaming ? <input id="rename-input" autoFocus onBlur={(e) => {
            setRenaming(false);
            if (e.target.value != "") {
                setDecks((prev: Deck[]) => {
                    let tempDecks = [...prev];
                    if (showDeckInfo) {
                        tempDecks[showDeckInfo.indexKey].name = e.target.value
                    }
                    return tempDecks;
                })
            }
        }}></input> : ""}
        <button id="review-deck-btn" className="deck-info-btn">Review</button>
        <button id="rename-deck-btn" className="deck-info-btn" onClick={() => {
            setRenaming(true)
        }}>Rename</button>
        <button id="delete-deck-btn" className="deck-info-btn">Delete</button>
        <button id="add-card-btn" className="deck-info-btn">Add card</button>
        <div id="deck-info-cards-div">
            {showDeckInfo ? showDeckInfo.cards.map((val, i) => {
                let front: string = val[0];
                let back: string = val[1];
                return <div className="deck-card-display-div" key={i}>
                    <div className="deck-card-front deck-card-side">{front}</div>
                    <div className="deck-card-back deck-card-side">{back}</div>
                </div>
            }) : ""}
        </div>
    </div>
}