import React, { Dispatch, SetStateAction, useState } from 'react';

import Deck from '../interfaces/Deck';

import '../styles/ReviewPage.css';

interface ReviewPageProps {
    setCurrPage: Dispatch<SetStateAction<(string)>>;
    deck: Deck | null;
}

export const ReviewPage: React.FC<ReviewPageProps> = ({setCurrPage, deck}) => {

    const [currCard, setCurrCard] = useState<number>(0);
    const [currFront, setCurrFront] = useState<boolean>(true);

    let frontTexts = [];
    let backTexts = [];

    if (deck != null) {
        for (let i = 0; i < deck.cards.length; i++) {
            frontTexts.push(deck.cards[i][0]);
            backTexts.push(deck.cards[i][1]);
        }
    }

    return <div id="review-page">
        <div id="review-card-display" onClick={() => {
            setCurrFront(prev => !prev);
        }}>{currFront ? frontTexts[currCard] : backTexts[currCard]}</div>
        <div id="review-buttons-div">
            <button id="review-back-btn" className="review-direction-btn" onClick={() => {
                setCurrCard((prev) => {
                    return prev > 0 ? prev - 1 : prev;
                })
                setCurrFront(true);
            }}>&lt;</button>
            <button id="review-exit-btn" onClick={() => {
                setCurrCard(0);
                setCurrPage("Home");
            }}>EXIT</button>
            <button id="review-forward-btn" className="review-direction-btn" onClick={() => {
                setCurrCard((prev) => {
                    return prev < frontTexts.length - 1 ? prev + 1 : prev;
                })
                setCurrFront(true);
            }}>&gt;</button>
        </div>
    </div>
}