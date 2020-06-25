import React from "react";
import "./style.css";

export default function ItemFactura({ cantidadItems }) {
  const listItems = cantidadItems.map(item => (
    <div key={item} className="item-factura">
      <label>
        Item
        <input placeholder="completar"></input>
      </label>
      <label>
        Descripcion
        <input placeholder="completar"></input>
      </label>

      <label>
        Cantidad
        <input placeholder="completar"></input>
      </label>
      <label>
        Monto
        <input placeholder="completar"></input>
      </label>
    </div>
  ));

  return <div>{listItems}</div>;
}
