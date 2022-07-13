
import React, { Fragment, useState } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { ListaPanes, Pasteles } from "../listasComponents/PanesLista";



const Cuarto = () => {
  const handleSubmit = (event) => {

    const micodigo = event.target.codigo.value;
    console.log(`código cliente:  ${micodigo}`);
  };
  //
  const { pan, micodigo } = useParams();

  //

  return (
    <Fragment>
      <br />
      <h2 style={{ color: "#9A6619" }}>Inserta tus datos</h2>
      <Link to={"/"} className="linkHome Link">
        Home
      </Link>
      <hr className="hrSecundo" />
      <h5>Elejiste pan -&gt; ~{pan}~</h5>
      <hr className="hrSecundo" />
      <form onSubmit={(event) => handleSubmit(event)}>
        {" "}
        <input
          placeholder="Código cliente.."
          name="codigo"
          type="number"
        ></input>{" "}
        <br /> <br />
        <button type="submit" style={{ background: "gold" }}>
          Confirma tus datos personales
        </button>{" "}
         
        {micodigo}
        &nbsp; &nbsp;
        <Link to={`${micodigo}`}>Continuar para pagar</Link>
      </form>
      <br /> <br />
      <Outlet />
      <div className="mb-3">
        <Link to={"/"} className="linkHome Link">
          Home
        </Link>
      </div>
    </Fragment>
  );
};

export default Cuarto;
