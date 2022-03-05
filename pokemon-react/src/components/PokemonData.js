import { useEffect, useState } from "react";


const PokemonData = () => {
    const [data, setData] = useState([])

useEffect(() => {
  const getPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const data = await res.json();
    setData(data);
  }
  getPokemon();
},[]);

    console.log(data)


return(
    <div>
        <ul>
            {data.results && data.results.map((pokemon, i) => {
                let pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`;
                return <li key={pokemon.name}> {pokemon.url}
                <img src={pokeUrl} alt=''/> 
                </li>
             })}
        </ul>
    </div>
    )
}

export default PokemonData;