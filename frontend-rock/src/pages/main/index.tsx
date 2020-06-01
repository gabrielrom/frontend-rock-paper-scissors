import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import { PickinsContext } from '../../context/PickingsContext';

import './style.css';

import Header from '../../components/Header';

import iconPaper from '../../assets/icon-paper.svg';
import iconRock from '../../assets/icon-rock.svg';
import iconScissor from '../../assets/icon-scissors.svg';
import backgroundTriangle from '../../assets/bg-triangle.svg';

const Options: React.FC = () => {
  const history = useHistory();

  const { pickings, score } = useContext(PickinsContext);

  async function handleOnClick (userOption: string): Promise<void> {
    await pickings(userOption);
    history.push('/play');
  }

  return (
    <div className="container">

      <Header score={score}/>

      <img src={backgroundTriangle} alt="background triangle" className="bg-triangle" />
      <div className="options-game">

        <button className="paper" onClick={() => handleOnClick('paper')}>
          <img src={iconPaper} alt="Icon Paper"/>
        </button>

        <button className="scissor" onClick={() => handleOnClick('scissor')}>
          <img src={iconScissor} alt="Icon Scissor"/>
        </button>
      </div>

      <button className="rock" onClick={() => handleOnClick('rock')}>
        <img src={iconRock} alt="Icon Rock"/>
      </button>

    </div>
  );
}

export default Options;
