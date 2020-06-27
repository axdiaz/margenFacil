import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Home() {
  return (
    <div className="App">
      <h1>Margen Fácil</h1>
      <Link to={"./facturas"}>
        <Button>hola</Button>
      </Link>
      <Link to={"./enDesarollo"}>
        <Button>Rubros</Button>
      </Link>
      <Link to={"./enDesarollo"}>
        <Button>Stocks</Button>
      </Link>
      <Link to={"./crearMargen"}>
        <Button>Crear Margen</Button>
      </Link>
      <Link to={"./enDesarollo"}>
        <Button>Salir</Button>
      </Link>
    </div>
  );
}
