import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button'

export default class CrearMargen extends Component {
  render() {
    return (
      <div className="App">
        <h1>Creando Margen</h1>

        <p>Complete los campos para crear el margen</p>

        <Link to={"./"}>
          <Button variant="raised">Crear Margen</Button>
        </Link>

        <Link to={"./"}>
          <Button variant="raised">Enviar Por Mail</Button>
        </Link>

        <Link to={"../"}>
          <Button variant="raised">Home</Button>
        </Link>
      </div>
    );
  }
}
