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
            <div>
              <p key={index} className="App pSecundo">
                <div>
                  {x.id}.<Link to={`/pedido/${x.tipo}`}> {x.tipo} </Link>
                  {x.precio} €
                </div>
              </p>
            </div>
          ))}
        </>
        {/* {<Link to={`/pedido/${tipo}`}> {x.tipo} </Link>} */}
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