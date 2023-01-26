import React, { Dispatch, SetStateAction, useState } from 'react';
import '../styles/NavBar.css';

interface NavBarProps {
  setCurrPage: Dispatch<SetStateAction<string>>;
}

export const NavBar: React.FC<NavBarProps> = ({setCurrPage}) => {
  return (
    <div id="nav-bar">
      <h1 id="nav-title" onClick={() => {
        setCurrPage("Home");
      }}>DECKSTER</h1>
    </div>
  );
}
