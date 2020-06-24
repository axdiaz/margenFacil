import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CrearMargen extends Component {
  render() {
    return (
      <div className="App">
        <h1>Creando Margen</h1>

        <p>Complete los campos para crear el margen</p>

        <Link to={"./"}>
          <button variant="raised">Crear Margen</button>
        </Link>

        <Link to={"./"}>
          <button variant="raised">Enviar Por Mail</button>
        </Link>

        <Link to={"../"}>
          <button variant="raised">Home</button>
        </Link>
      </div>
    );
  }
}
