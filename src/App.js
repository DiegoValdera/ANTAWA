import React from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import './sass/App.css';
import Header from './components/header/index';
import Home from './components/main/index';
import Login from './pages/login/index';
import Register from './pages/registerUser';
import Usados from './pages/usados/index';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/usados" component={Usados} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

        </Switch>
      </Router>
    </div>

  );
}

export default App;
