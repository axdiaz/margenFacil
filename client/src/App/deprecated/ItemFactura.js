import React from "react";
import "../components/style.css";
import { FriendList } from "./formicPrueba";
import CustomForm from "./CustomForm";

export default function ItemFactura({ cantidadItems }) {
  return (
    <>
      <div>
        <h1>-----------------------------------------</h1>
        <h1>componente final</h1>
        <CustomForm />
        <h1>-----------------------------------------</h1>

        {/* <FriendList /> */}
      </div>
    </>
  );
}
