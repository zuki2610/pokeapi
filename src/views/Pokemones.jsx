import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    
    const navigate = useNavigate();


    const handleChange = (e) => {
        setPokemon(e.target.value);
    };

    const getPokemones = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?");
        const data = await res.json();
        setPokemones(data.results);
    };
    const verDetalle = () => {
        console.log(pokemon);
        if (pokemon !== null && pokemon !== "Selecciona un Pokemon") {
            navigate(`/pokeapi/detalles/${pokemon}`);
        } 
        else {
            alert("Selecciona un pokemon");
        }
    };

    useEffect(() => {
        getPokemones();
    }, []);

    return (
        <div>
            <h2 className="mt-2"> Selecciona un Pokemon</h2>
            <select onChange={handleChange} className="form-select select" aria-label="Pokemones">
            <option value={null} >Selecciona un Pokemon</option>
            {pokemones.map((pokemon) => (   
            <option key={pokemon.name}    value={pokemon.name}>{pokemon.name}</option>
            ))}

            </select>
            <button onClick={verDetalle} type="button" className="btn btn-dark mt-3">Ver detalle</button>
        </div>
    )
}