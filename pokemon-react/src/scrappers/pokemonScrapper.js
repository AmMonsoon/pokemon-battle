import axios from 'axios'
import cheerio from 'cheerio'

const PokemonScrapper = async () => {
   let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151%27')
   console.log(res)
}
PokemonScrapper()

export default PokemonScrapper;