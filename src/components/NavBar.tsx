import React from 'react';
import '../styles/NavBar.css';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <div id="nav-bar">
      <h1 id="nav-title">DECKSTER</h1>
    </div>
  );
}
