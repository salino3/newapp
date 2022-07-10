import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {

 const [first, setfirst] = useState()



  return (
    <Fragment>
      <div className="divPrincipalInicio">
        <div className="divBoxInicio">
          <div className="divInicioUno">
            <p style={{ color: "white", backgroundColor: "#9A6619" }}>
              Mira aquí los tipos de pan que tenemos..
            </p>
            <button className="btn btn-primary buttonInicio">
              <Link to={"/segundo"} className="Link">
                Ir a la lista
              </Link>
            </button>
          </div>

          <div className="divInicioUno">
            <p style={{ color: "white", backgroundColor: "#9A6619" }}>
              Mira aquí los postres que tenemos..
            </p>
            <button className="btn btn-primary buttonInicio">
              <Link to={"/third"} className="Link">
                Ir a la lista
              </Link>
            </button>
          </div>

          <div className="divInicioDos">
            <p style={{ color: "white", backgroundColor: "#9A6619" }}>
              Clica aquí y <br /> haz tu pedido..
            </p>
            <button className="btn btn-primary buttonInicio">
              <Link to={"/pedido"} className="Link">
                Ir al carrito
              </Link>
            </button>
          </div>
          <div className="divInicioDos">
            <p style={{ color: "white", backgroundColor: "#9A6619" }}>
              Nuestros <br /> contactos
            </p>
            <button className="btn btn-primary buttonInicio">
              <Link to={"/third"} className="Link">
                contactos
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Inicio