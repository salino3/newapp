import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { ListaPanes } from "../listasComponents/PanesLista";

const Segundo = () => {
  const [first, setfirst] = useState(ListaPanes);
  
  return (
    <Fragment>
      <br />
      <h2 style={{ color: "#9A6619" }}>Nuestros panes</h2>
      <hr className="hrSecundo" />
      <div className="mb-3">
        <Link to={"/"} className="linkHome Link">
          Home
        </Link>
      </div>
      <div className="divSegundo">
        {first.map((x, index) => (
            <p key={index} className="App pSecundo">
                {x.id}. {x.tipo} {x.precio} €              
            </p>
        ))}
      </div>
      <div className="divLinkHome">
        <Link to={"/"} className="linkHome Link">
          Home
        </Link>
      </div>
      <br /> <br />
    </Fragment>
  );
};

export default Segundo;
