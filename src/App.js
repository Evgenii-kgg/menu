import React from 'react';

import HomePage from './HomePage';
import DriftPage from './DriftPage';
import TimeAttackPage from './TimeAttackPage';
import ForzaPage from './ForzaPage';
//import Page404 from "./Page404";
import Menu from './Menu';


import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div>
        <nav>
        <Menu />
        </nav>
        <Switch>
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
