import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export interface Picks {
  pick: {
    userOption: string;
    computerOption: string;
  },
  winner: {
    ganhador: string;
  };
}

interface PickingsContext {
  pickings(userOption: string): Promise<void>;
  pontuation(ganhador: string): Promise<number | void>;
  picks: Pick;
  score: number;
}

interface Pick {
  pickingUser: string;
  pickingComputer: string;
}

const PickinsContext = createContext<PickingsContext>({} as PickingsContext);

const PickingsProvider: React.FC = ({ children }) => {
  const [picks, setPicks] = useState<Pick>({} as Pick);
  const [score, setScore] = useState(0);

  const pickings = useCallback(async (userOption) => {
    const response = await api.post('/picking', {
      userOption,
    });

    setPicks(response.data);
  }, []);

  const pontuation = useCallback(async (ganhador: string | undefined) => {
    if( ganhador === 'user') {
      setScore(score + 1);
    }

    if( ganhador === 'computer' && score > 0) {
      setScore(score - 1);
    }else {
      return score;
    }
  }, [picks]);

  return (
    <PickinsContext.Provider value={ { pickings, score, picks, pontuation} }>
      {children}
    </PickinsContext.Provider>
  );
}

export { PickinsContext, PickingsProvider };

