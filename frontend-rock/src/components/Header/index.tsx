import React, { useState, useEffect } from 'react';

import logo from '../../assets/logo.svg';

import './style.css';

interface HeaderProps {
  score?: number;
}

const Header:React.FC<HeaderProps> = ({ score }) => {
  return (
    <header className="header-score">
      <img src={logo} alt="Rock Paper Scissor"/>
      <div className="score">
        <p>SCORE</p>
        <strong>{score}</strong>
      </div>
    </header>
  )
};

export default Header;
