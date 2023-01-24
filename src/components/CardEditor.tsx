import React, { Dispatch, SetStateAction, useState } from 'react';

import Deck from '../interfaces/Deck';

import '../styles/CardEditor.css';

interface CardEditorProps {
    showDeckInfo: Deck | null;
    setShowDeckInfo: Dispatch<SetStateAction<(Deck | null)>>;
    decks: Deck[];
    setDecks: Dispatch<SetStateAction<(Deck[])>>;
    showCardEditor: number | null;
    setShowCardEditor: Dispatch<SetStateAction<(number | null)>>;
}

export const CardEditor: React.FC<CardEditorProps> = ({showDeckInfo, setShowDeckInfo, decks, setDecks, showCardEditor, setShowCardEditor}) => {

    const [frontVal, setFrontVal] = useState<string>("");
    const [backVal, setBackVal] = useState<string>("");

    return <div id="card-editor">
        <div id="card-editor-front-div" className="card-editor-side-div">
            <input id="card-editor-front-input" className="card-editor-side-input" defaultValue="front" onChange={(e) => {
                setFrontVal(e.target.value);
            }}/>
        </div>
        <div id="card-editor-back-div" className="card-editor-side-div">
            <input id="card-editor-back-input" className="card-editor-side-input" defaultValue="back" onChange={(e) => {
                setBackVal(e.target.value);
            }}/>
        </div>
        <button id="card-editor-ok-btn" onClick={() => {
            setShowCardEditor(null);
            if (showDeckInfo) {
                let thisIndx: number = showDeckInfo.indexKey;
                setDecks((prev) => {
                    let tempDecks: Deck[] = [...prev];
                    tempDecks[thisIndx].cards.push([frontVal, backVal]);
                    return tempDecks;
                })
                setShowDeckInfo(decks[thisIndx]);

            }

        }}>OK</button>
    </div>
}