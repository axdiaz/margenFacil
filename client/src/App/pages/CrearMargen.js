import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function CrearMargen() {
  return (
    <div className="App">
      <h1>Creando Margen</h1>

      <p>Complete los campos para crear el margen</p>

      <Link to={"./"}>
        <Button>Crear Margen</Button>
      </Link>

      <Link to={"./"}>
        <Button>Enviar Por Mail</Button>
      </Link>

      <Link to={"../"}>
        <Button>Home</Button>
      </Link>
    </div>
  );
}
