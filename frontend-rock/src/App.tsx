import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PickingsProvider }  from './context/PickingsContext';

import Options from './pages/main';
import Game from './pages/game';

const App: React.FC = () => (
  <PickingsProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Options} />
        <Route path="/play" component={Game} />
      </Switch>
    </BrowserRouter>
  </PickingsProvider>
);

export default App;
