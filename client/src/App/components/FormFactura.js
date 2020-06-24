import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FormFactura() {
  const [cantidadItems, setCantidadItems] = useState([1]);

  const handleAgregarItem = () => {
    const val = cantidadItems[cantidadItems.length - 1];
    setCantidadItems(cantidadItems.concat(val + 1), console.log(cantidadItems));
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
        <div>
          <p>item</p> <input placeholder="completar"></input>
          <p>Descripcion</p> <input placeholder="completar"></input>
          <p>Cantidad</p> <input placeholder="completar"></input>
          <p>monto</p> <input placeholder="completar"></input>
        </div>
        <button onClick={() => handleAgregarItem()}>Agregar Item</button>
      </div>

      <Link to={"./AgregarFacturas"}>
        <button variant="raised">Agregar Facturas</button>
      </Link>
    </div>
  );
}
