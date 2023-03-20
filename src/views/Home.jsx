import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
 
  const getPokemon = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await res.json();
    setPokemon(data);
  };
  const alerta = () => {
    Swal.fire({
      title: "Bienvenido maestro Pokemon",
      width: 600,
      padding: "3em",
      color: "#ffff00",
      background: "#000 url("+ process.env.PUBLIC_URL + "/logo2.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url('${process.env.PUBLIC_URL}/pokemon.gif')
        left top
        no-repeat
      `,
    });
  };

  useEffect(() => {
    getPokemon();  
    alerta();
  }, []);

  return (
    <div>
      <h2 className="mt-5">Bienvenido maestro Pokemon</h2>

      <div>
        <img src={pokemon?.sprites.other.home.front_default} alt="Pikachu" />
      </div>
    </div>
  );
}
