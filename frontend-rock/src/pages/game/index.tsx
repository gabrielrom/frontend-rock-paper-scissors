import React, { useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

import Header from '../../components/Header';
import { PickinsContext, Picks } from '../../context/PickingsContext';
import api from '../../services/api';

import paper from '../../assets/icon-paper.svg';
import rock from '../../assets/icon-rock.svg';
import scissor from '../../assets/icon-scissors.svg';

const Game: React.FC = () => {
  const history = useHistory();

  const { picks, pontuation, score} = useContext(PickinsContext);
  const [whosWin, setWhosWin] = useState<Picks | null>(null);

  useEffect(() => {
    api.get('/picking/whoswin').then(async response => {

      await pontuation(response.data.winner.ganhador);
      setWhosWin(response.data);
    });
  }, [pontuation, setWhosWin]);

  return (
    <div className="container">
      <Header score={score} />

      <div className="options">
        <div className="option-user">
          <p>YOU PICKED</p>
          <div className="button">
            <button className={picks.pickingUser === 'rock' ? 'rock-options' : picks.pickingUser}>
              <img src={
                picks.pickingUser === 'rock' ? rock :
                picks.pickingUser === 'paper' ? paper : scissor
              }
              alt={`icon ${picks.pickingUser}`}/>
            </button>
          </div>
        </div>

        <div className="result">
          <p className="result-text">
            {
              whosWin?.winner.ganhador === 'user' ? 'YOU WIN' :
              whosWin?.winner.ganhador === 'computer' ? 'YOU LOSE' : 'a tie'
            }
          </p>
          <button className="result-button" onClick={() => history.push('/')}>PLAY AGAIN</button>
        </div>

        <div className="option-computer">
          <p>THE HOUSE PICKED</p>
          <div className="button">
            <button className={picks.pickingComputer === 'rock' ? 'rock-options' : picks.pickingComputer}>
              <img src={
                picks.pickingComputer === 'rock' ? rock :
                picks.pickingComputer === 'paper' ? paper : scissor
              }
              alt={`icon ${picks.pickingComputer}`}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
