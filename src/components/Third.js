import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {  Pasteles } from "../listasComponents/PanesLista";

const Third = () => {

    const [first, setfirst] = useState(Pasteles)

  return (
    <Fragment>
      <br />
      <h2 style={{ color: "#9A6619" }}>Nuestros postres</h2>
      <hr className="hrSecundo" />
      <div className="mb-3">
        <Link to={"/"} className="linkHome Link">
          Home
        </Link>
      </div>
      <div className="divSegundo">
        {first.map((x, index) => (
          <div>
            <p key={index} className="App pSecundo">
              <div>
                {x.id}. {x.tipo} {x.precio} €
              </div>
            </p>
          </div>
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

export default Third;
