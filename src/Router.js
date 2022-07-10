import React, { Fragment } from 'react';
import { Routes, Route, useParams, Outlet } from "react-router-dom";
//
import Inicio from './components/Inicio';
import Segundo from "./components/Segundo";
import Third from "./components/Third";
import NavBar from "./components/NavBar";
import Pedido from "./components/Pedido";
import Cuarto from './components/Cuarto';
import PagoProductos from './components/PagoProductos';


const Router = () => {


  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/segundo" element={<Segundo />} />
        <Route path="/third" element={<Third />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/pedido/:pan" element={<Cuarto />}>
          <Route path="pagoproductos" element={<PagoProductos />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default Router