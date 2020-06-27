import React from "react";
import "./style.css";
import FormSpanningTable from './FormSpanningTable'


export default function ItemFactura({ cantidadItems }) {
  const listItems = cantidadItems.map(item => (
    <div key={item} className="item-factura">
      <input placeholder="completar"></input>

      <input placeholder="completar"></input>

      <input placeholder="completar"></input>

      <input placeholder="completar"></input>
    </div>
  ));

  return (
    <>
    <div>
      <FormSpanningTable/>
    </div>

    {/*  <label>Item</label>
      <label>Descripcion</label>
      <label>Cantidad</label>
      <label>Monto</label>
      <div>{listItems}</div>;
        */}
    </>
  );
}
