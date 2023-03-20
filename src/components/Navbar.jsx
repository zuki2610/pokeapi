import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navegacion() {
  const setActiveClass = ({ isActive }) => {
    return isActive ? "active" : undefined;
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href="/pokeapi/">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" width="36" height="36"></img>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={`nav-link ${setActiveClass}`} exact to='/pokeapi/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${setActiveClass}`} to='/pokeapi/pokemones'>
                Pokemones
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
