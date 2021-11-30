import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './sass/App.css';
import Header from './components/header/index';
import Home from './components/main/index';
import Login from './pages/login/index';
import Usados from './pages/usados/index';
import BcrAuto from './pages/buscar-auto/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/buscar-auto" component={BcrAuto} />
          <Route exact path="/usados" component={Usados} />
          <Route exact path="/login" component={Login} />

        </Switch>
      </Router>
    </div>

  );
}

export default App;
