import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button'

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Margen Fácil</h1>
        <Link to={"./facturas"}>
          <Button variant="raised">hola</Button>
        </Link>
        <Link to={"./enDesarollo"}>
          <Button variant="raised">Rubros</Button>
        </Link>
        <Link to={"./enDesarollo"}>
          <Button variant="raised">Stocks</Button>
        </Link>
        <Link to={"./crearMargen"}>
          <Button variant="raised">Crear Margen</Button>
        </Link>
        <Link to={"./enDesarollo"}>
          <Button variant="raised">Salir</Button>
        </Link>
      </div>
    );
  }
}
