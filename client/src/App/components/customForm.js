import React from "react";
import MaterialTable from "material-table";
import { tableIcons } from "../imports/tableIcons";
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Descripcion", field: "descripcion" },
      { title: "Precio Unit.", field: "precio_unit", type: "numeric" },
      { title: "Cantidad", field: "cantidad", type: "numeric" },
      {
        title: "Subtotal",
        field: "subtotal",
      },
    ],
    data: [
      {
        descripcion: "Mehmet",
        precio_unit: "Baran",
        cantidad: 1987,
        subtotal: 63,
      },
      {
        name: "Zerya Betül",
        precio_unit: "Baran",
        cantidad: 2017,
        subtotal: 34,
      },
    ],
  });

  return (
    <MaterialTable
      options={{ search: false }}
      icons={tableIcons}
      title="Lista de Items"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
