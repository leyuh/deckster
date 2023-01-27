import React, { Dispatch, SetStateAction, useState } from 'react';
import '../styles/NavBar.css';

import Deck from '../interfaces/Deck';

interface NavBarProps {
  setCurrPage: Dispatch<SetStateAction<string>>;
  setShowDeckInfo: Dispatch<SetStateAction<Deck | null>>;
  setShowCardEditor: Dispatch<SetStateAction<number | null>>;
}

export const NavBar: React.FC<NavBarProps> = ({setCurrPage, setShowDeckInfo, setShowCardEditor}) => {
  return (
    <div id="nav-bar">
      <h1 id="nav-title" onClick={() => {
        setCurrPage("Home");
        setShowDeckInfo(null);
        setShowCardEditor(null);
      }}>DECKSTER</h1>
    </div>
  );
}
