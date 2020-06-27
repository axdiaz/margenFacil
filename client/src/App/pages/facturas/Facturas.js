import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button'

export default class Facturas extends Component {
  render() {
    return (
      <div className="App">
        <h1>Margen Fácil</h1>
        <Link to={"./agregarFacturas"}>
          <Button variant="raised">Agregar Factura</Button>
        </Link>
        <Link to={"./list"}>
          <Button variant="raised">Buscar Factura</Button>
        </Link>
        <Link to={"./list"}>
          <Button variant="raised">Eliminar Factura</Button>
        </Link>
        <Link to={"./list"}>
          <Button variant="raised">Modificar Factura</Button>
        </Link>
        <Link to={"./list"}>
          <Button variant="raised">Listar Facturas</Button>
        </Link>
        <Link to={"../"}>
          <Button variant="raised">Home</Button>
        </Link>
      </div>
    );
  }
}
