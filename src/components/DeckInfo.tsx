import React, { Dispatch, SetStateAction, useState } from 'react';

import Deck from '../interfaces/Deck';

import '../styles/DeckInfo.css';

interface DeckInfoProps {
    showDeckInfo: Deck | null;
    setShowDeckInfo: Dispatch<SetStateAction<(Deck | null)>>;
    decks: Deck[];
    setDecks: Dispatch<SetStateAction<(Deck[])>>;
    setShowCardEditor: Dispatch<SetStateAction<(number | null)>>;
}

export const DeckInfo: React.FC<DeckInfoProps> = ({showDeckInfo, setShowDeckInfo, decks, setDecks, setShowCardEditor}) => {

    const [renaming, setRenaming] = useState<boolean>(false);
    const [deleteCard, setDeleteCard] = useState<number | null>(null);

    return <div id="deck-info">
        <button id="close-deck-info-btn" onClick={() => {
            setShowDeckInfo(null);
            setShowCardEditor(null);
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
        <button id="delete-deck-btn" className="deck-info-btn" onClick={() => {
            if (showDeckInfo) {
                let thisIndx: number = showDeckInfo.indexKey;

                setShowDeckInfo(null);
                setDecks((prev) => {
                    let tempDecks: Deck[] = [];
                    for (let i = 0; i < prev.length; i++) {
                        if (i < thisIndx) {
                            tempDecks.push(prev[i]);
                        } else if (i > thisIndx) {
                            let tempPrev: Deck = {...prev[i]};
                            tempPrev.indexKey = prev[i].indexKey - 1
                            tempDecks.push(tempPrev)
                        }
                    }

                    return tempDecks;
                })
            }
        }}>Delete</button>
        <button id="add-card-btn" className="deck-info-btn" onClick={() => {
            if (showDeckInfo) {
                let thisIndx: number = showDeckInfo.indexKey;
                
                setShowCardEditor(decks[thisIndx].cards.length - 1);
            }
        }}>Add card</button>
        <div id="deck-info-cards-div">
            {showDeckInfo ? showDeckInfo.cards.map((val, i) => {
                let front: string = val[0];
                let back: string = val[1];
                return <div className="deck-card-display-div" onMouseOver={() => {
                    setDeleteCard(i);
                }} onMouseLeave={() => {
                    setDeleteCard(null);
                }} onClick={() => {
                    if (deleteCard == i) {
                        setDeleteCard(null);
                        if (showDeckInfo) {
                            let thisIndx: number = showDeckInfo.indexKey;
                            setDecks((prev) => {
                                let tempDecks: Deck[] = [...prev];
                                tempDecks[thisIndx].cards.splice(i, 1);
                                return tempDecks;
                            })
                            setShowDeckInfo(decks[thisIndx]);
                        }
                    }
                }} key={i}>
                    {deleteCard == i ? <h1 className="delete-card-x">X</h1> : ""}

                    <div className="deck-card-front deck-card-side">{front}</div>
                    <div className="deck-card-back deck-card-side">{back}</div>
                </div>
            }) : ""}
        </div>
    </div>
}