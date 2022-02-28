const axios = require('axios');
const fs = require('fs');

const PokemonScrapper = async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151%27');
  const pokemon = res.data.results;
  const pokemonArr = []

  pokemon.forEach(async (poke) => {
    const url = poke.url;
    const pokemonData = await axios.get(url);
    const abilities = pokemonData.data.abilities;
    const typesArr = pokemonData.data.types.map((ele) => ele.type.name);
    console.log(typesArr)
  })

  fs.writeFile('../../../pokemon-flask/seeds/pokemon_seeds.json', JSON.stringify(pokemonArr), (err) => {
    if (err) console.error(`A wild error has appeared in the bushes: ${err}`);
    else console.log(`Successful scrape! Count: ${pokemonArr.length}`)
  })
}
PokemonScrapper()