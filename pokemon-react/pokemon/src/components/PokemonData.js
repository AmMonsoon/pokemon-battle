import { useEffect, useState } from "react";

const PokemonData = () => {
    const [data, setData] = useState([])

useEffect( async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data =>  setData(data))
},[]);


    console.log(data)

return(
    <div>
        <ul>
            {data.results && data.results.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
        </ul>
    </div>

    
    )
}

export default PokemonData;