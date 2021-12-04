import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./sass/App.css";
import Header from "./components/header/index";
import Home from "./components/main/index";
import Login from "./pages/login/index";
import Register from "./pages/registerUser";
import Usados from "./pages/usados/index";
import BcrAuto from "./pages/buscar-auto/index";
import DetAuto from "./pages/detalle-auto";
import ContactForm from "./pages/usados/index";
import PublshCar from './pages/publicar-auto';

import { store, persistor } from "./store/";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />

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
              <Route exact path="/publicar-auto" component={PublshCar} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
