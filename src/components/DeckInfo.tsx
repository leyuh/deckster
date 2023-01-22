import React from 'react';

interface DeckInfoProps {
    deckName: string;
}

export const DeckInfo: React.FC<DeckInfoProps> = ({deckName}) => {
    return <div id="deck-info">
        <h1 id="deck-info-title">{deckName}</h1>
        <button id="review-deck-btn" className="deck-info-btn">Review</button>
        <button id="rename-deck-btn" className="deck-info-btn">Rename</button>
        <button id="delete-deck-btn" className="deck-info-btn">Delete</button>
        <button id="add-card-btn" className="deck-info-btn">Add card</button>
        <div id="deck-info-cards-div">

        </div>
    </div>
}