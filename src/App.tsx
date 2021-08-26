import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
