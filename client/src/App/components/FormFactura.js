import React, { useState } from "react";
import { Link } from "react-router-dom";
import Item from "./ItemFactura";

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
          <p>Nro de Factura</p> <input placeholder="completar"></input>
          <p>Fecha</p> <input placeholder="completar"></input>
          <p>Rubro #1</p> <input placeholder="completar"></input>
          <button>Agregar Rubro</button>
        </div>
        <Item cantidadItems={cantidadItems} />
      </div>

      <button onClick={() => handleAgregarItem()}>Agregar Item</button>

      <Link to={"./AgregarFacturas"}>
        <button variant="raised">Agregar Facturas</button>
      </Link>
    </div>
  );
}
