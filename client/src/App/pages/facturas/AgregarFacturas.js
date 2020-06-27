import React from "react";
import { Link } from "react-router-dom";
import Factura from "../../components/FormFactura";
import Button from "@material-ui/core/Button";

export default function AgregarFacturas() {
  return (
    <div className="App">
      <h1>Agregar Factura</h1>

      <Factura />

      <Link to={"../"}>
        <Button>Home</Button>
      </Link>
    </div>
  );
}
