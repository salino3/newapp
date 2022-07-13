import React, {useState, Fragment} from 'react';
import { Link, useParams, Outlet } from "react-router-dom";
import { ListaPanes, Pasteles, tipoPanes } from "../listasComponents/PanesLista";


const Pedido = () => {

    const [first, setfirst] = useState(ListaPanes);
    const [second, setsecond] = useState(tipoPanes);


  return (
    <Fragment>
      <br />
      <h2 style={{ color: "#9A6619" }}>Página pedido</h2>
      <hr className="hrSecundo" />
      <div className="mb-3">
        <Link to={"/"} className="linkHome Link">
          Home
        </Link>
      </div>
      <div className="divSegundo">
        <>
          {first.map((x, index) => (
              <p key={index} className="App pSecundo">
                  {x.id}.<Link to={`/cuarto/${x.tipo}`}> {x.tipo} </Link>
                  {x.precio} €
              </p>
          ))}
        </>
      </div>
      <div className="divLinkHome">
        <Link to={"/"} className="linkHome Link">
          Home
        </Link>
      </div>
      <br /> <br />
    </Fragment>
  );
}

export default Pedido