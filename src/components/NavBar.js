import React, { Fragment, useState} from 'react';



const NavBar = () => {
  return (
    <Fragment>
      <nav className="nav1">
        <ul>
          <li className="primeraFoto"></li>
          <li>  <h2 className="tituloNav"> Panaderia Michel </h2> </li>
          <li className="segundaFoto"></li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default NavBar