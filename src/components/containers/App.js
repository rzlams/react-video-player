import React from 'react';
import Player from './Player';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  <>
    <Switch>
      <Route exact path="/" component={Player} />
      <Route exact path="/:activeVideo" component={Player} />
    </Switch>
    <GlobalStyle />
  </>
  </BrowserRouter>
)

export default App;