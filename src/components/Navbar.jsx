import React from 'react';





export default function Navegacion() {
      
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href='/pokeapi/'>
            <img src="logo.png" alt="" width="30" height="24"></img>
          </a>
        </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/pokeapi/'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/pokeapi/pokemones'>Pokemones</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}





