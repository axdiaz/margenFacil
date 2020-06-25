import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./ItemFactura";
import dibujoForm from "./dibujoFactura.jpg"
import './style.css'

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
            <button>Agregar Rubro</button>
          </label>
        </div>
        <Item cantidadItems={cantidadItems} />
      </div>

      <button onClick={() => handleAgregarItem()}>Agregar Item</button>

      <Link to={"./AgregarFacturas"}>
        <button variant="raised">Agregar Facturas</button>
      </Link>

      <img src={dibujoForm} alt="imagen de factura" className="dibujo-factura"/>

    </div>
  );
}
