import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Margen Fácil</h1>
        <Link to={"./facturas"}>
          <button variant="raised">Facturas</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Rubros</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Stocks</button>
        </Link>
        <Link to={"./crearMargen"}>
          <button variant="raised">Crear Margen</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Salir</button>
        </Link>
      </div>
    );
  }
}
