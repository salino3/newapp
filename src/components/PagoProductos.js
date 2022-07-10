import React, { Fragment, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";



const PagoProductos = () => {

   const {pan} = useParams()
  return (
    <Fragment>
      <div>PagoProductos</div>
<div>proxima tarea crear fromulario para el pago</div>
    <h1>{pan}</h1>
    </Fragment>
  );
}

export default PagoProductos

