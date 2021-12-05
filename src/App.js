import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./components/header/Navbar/Navbar";

import "./sass/App.css";
import Home from "./components/main/index";
import Login from "./pages/login/index";
import Register from "./pages/registerUser";
import Usados from "./pages/usados/index";
import BcrAuto from "./pages/buscar-auto/index";
import DetAuto from "./pages/detalle-auto";
import ContactForm from "./pages/usados/index";

import { store } from "./store/";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/ANTAWA" component={Home} />
            <Route exact path="/buscar-auto" component={BcrAuto} />
            <Route exact path="/detalle" component={DetAuto} />
            <Route exact path="/contactform" component={ContactForm} />
            <Route exact path="/usados" component={Usados} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/contactform" component={ContactForm} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
