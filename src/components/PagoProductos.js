import React, { Fragment, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";



const PagoProductos = () => {

   const { micodigo, pan} = useParams()
  return (
    <Fragment>
      <div>PagoProductos</div>
      <div>proxima tarea crear fromulario para el pago</div>
     - <h1>{pan}</h1> - <p>{micodigo}</p>
    </Fragment>
  );
}

export default PagoProductos

