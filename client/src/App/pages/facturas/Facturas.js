import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Facturas() {
  return (
    <div className="App">
      <h1>Margen Fácil</h1>
      <Link to={"./agregarFacturas"}>
        <Button>Agregar Factura</Button>
      </Link>
      <Link to={"./enDesarrollo"}>
        <Button>Buscar Factura</Button>
      </Link>
      <Link to={"./enDesarrollo"}>
        <Button>Eliminar Factura</Button>
      </Link>
      <Link to={"./enDesarrollo"}>
        <Button>Modificar Factura</Button>
      </Link>
      <Link to={"./enDesarrollo"}>
        <Button>Listar Facturas</Button>
      </Link>
      <Link to={"../"}>
        <Button>Home</Button>
      </Link>
    </div>
  );
}
