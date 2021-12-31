import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import "./styles/All.sass"
import Home from './pages/Home';
import Avis from './pages/Avis';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/avis" component={Avis}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;