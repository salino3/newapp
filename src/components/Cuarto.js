import { cleanup } from '@testing-library/react';
import { clear } from '@testing-library/user-event/dist/clear';
import React, { Fragment, useState } from 'react';
import { Link, useParams, Outlet } from "react-router-dom";
import { ListaPanes, Pasteles } from "../listasComponents/PanesLista";






const Cuarto = () => {

   const [first, setfirst] = useState('')
   const { pan } = useParams();


//
const handleSubmit = (event) => {
  event.preventDeafault();
  const anombre = event.target.nombre.value;
  const aemail = event.target.email.value;
  const aedad = event.target.number.edad;
  console.log(`datos cliente:  ${anombre} ,${aemail} , ${aedad}`);
};

  return (
    <Fragment>
      <br />
      <h2 style={{ color: "#9A6619" }}>
        Inserta tus datos para comprar el producto
      </h2>
      <hr className="hrSecundo" />
      <h5>Elejiste pan -&gt;  ~{pan}~</h5>
      <hr className="hrSecundo" />
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          placeholder="Nombre y apellido.."
          type="text"
          name="nombre"
        ></input>{" "}
        <br /> <br />
        <input placeholder="Tu email.." name="email" type="email"></input>{" "}
        <br /> <br />
        <input placeholder="edad" name="edad" type="number"></input> <br />{" "}
        <br />
        <button type="submit" style={{ background: "gold" }}>
          {" "}
          <Link to={"pagoproductos"}>Confirma tus datos personales</Link>{" "}
        </button>
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
}

export default Cuarto