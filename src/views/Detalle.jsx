import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



export default function Detalle() {

    const [pokemonDetalle, setPokemonDetalle] = useState(null);
    const { name } = useParams();

    const getPokemonDetalle = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        setPokemonDetalle(data);    
    }

    useEffect(() => {
        getPokemonDetalle();
    }, []);


    return (
        <div>
             <h3 className="mt-3">Pokemon: {name}</h3>   
            <div className="d-flex justify-content-center align-items-center">      
            <img src={pokemonDetalle?.sprites.other.home.front_default} alt="pokemon" />      
            <ul>
            <h3>Element: {pokemonDetalle?.types[0].type.name}</h3>
            <li>HP: {pokemonDetalle?.stats[0].base_stat} </li>
            <li>Attack: {pokemonDetalle?.stats[1].base_stat} </li>
            <li>Special Attack: {pokemonDetalle?.stats[2].base_stat} </li>
            <li>Defense: {pokemonDetalle?.stats[3].base_stat} </li>
            <li>Special Defense: {pokemonDetalle?.stats[4].base_stat} </li>
            <li>Speed: {pokemonDetalle?.stats[5].base_stat} </li>
            </ul>
            </div>         
         </div>

    )
}