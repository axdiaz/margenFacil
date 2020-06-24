import React from "react";
import { Link } from "react-router-dom";
import Factura from '../../components/FormFactura'

export default function AgregarFacturas() {

    return (
      <div className="App">
        <h1>Agregar Factura</h1>

          <Factura/>



        <Link to={"../"}>
          <button variant="raised">Home</button>
        </Link>
      </div>
    );
}
