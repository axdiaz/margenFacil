import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Facturas from './pages/facturas/Facturas'
import AgregarFacturas from './pages/facturas/AgregarFacturas'
import CrearMargen from './pages/CrearMargen'
import EnDesarrollo from './pages/EnDesarrollo'


export default class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/facturas" component={Facturas} />
          <Route path="/agregarFacturas" component={AgregarFacturas} />
          <Route path="/crearMargen" component={CrearMargen} />
          <Route path="/enDesarollo" component={EnDesarrollo} />
        </Switch>
      </div>
    );

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}
