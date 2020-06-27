import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./ItemFactura";
import dibujoForm from "./dibujoFactura.jpg"
import './style.css'
import Button from '@material-ui/core/Button'

export default function FormFactura() {
  const [cantidadItems, setCantidadItems] = useState([1]);

  const handleAgregarItem = () => {
    const val = cantidadItems[cantidadItems.length - 1];
    setCantidadItems(cantidadItems.concat(val + 1));
  };

  return (
    <div>
      <h1>Soy el form factura</h1>
      <p>Complete los datos</p>
      <div>
        <div>
          <label>
            Nro de Factura
            <input placeholder="completar"></input>
          </label>
          <label>
            Fecha
            <input placeholder="completar"></input>
          </label>
          <label>
            tipo:
            <select>
              <option value="Ingreso">Ingreso</option>
              <option value="Egreso">Egreso</option>
            </select>
          </label>
          <label>
            Rubro #1
            <input placeholder="completar"></input>
            <Button>Agregar Rubro</Button>
          </label>
        </div>
        <Item cantidadItems={cantidadItems} />
      </div>

      <Button onClick={() => handleAgregarItem()}>Agregar Item</Button>

      <Link to={"./AgregarFacturas"}>
        <Button variant="raised">Agregar Facturas</Button>
      </Link>

      <img src={dibujoForm} alt="imagen de factura" className="dibujo-factura"/>

    </div>
  );
}
