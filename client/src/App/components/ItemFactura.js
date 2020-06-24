import React from "react";

export default function ItemFactura({ cantidadItems }) {
  const listItems = cantidadItems.map(item => (
    <div key = {item}>
      <p>item</p> <input placeholder="completar"></input>
      <p>Descripcion</p> <input placeholder="completar"></input>
      <p>Cantidad</p> <input placeholder="completar"></input>
      <p>monto</p> <input placeholder="completar"></input>
    </div>
));

  return <div>{listItems}</div>;
}
