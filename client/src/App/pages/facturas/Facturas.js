import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Facturas extends Component {
  render() {
    return (
      <div className="App">
        <h1>Margen Fácil</h1>
        <Link to={"./agregarFacturas"}>
          <button variant="raised">Agregar Factura</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Buscar Factura</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Eliminar Factura</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Modificar Factura</button>
        </Link>
        <Link to={"./list"}>
          <button variant="raised">Listar Facturas</button>
        </Link>
        <Link to={"../"}>
          <button variant="raised">Home</button>
        </Link>
      </div>
    );
  }
}
