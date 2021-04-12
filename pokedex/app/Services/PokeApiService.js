import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js";

class PokeApiService {
  async getPokemon(pokemonName) {
    let resolve = await pokemonApi.get(pokemonName)
    ProxyState.activePokemon = new Pokemon(resolve.data)
  }
  // axios.get('/user', {
  // params: {
  //   ID: 12345
  // }}
  async getAllPokemons() {
    let resolve = await pokemonApi.get('', { params: { limit: 151 } })
    ProxyState.apiPokemons = resolve.data.results
  }

}

export const pokeApiService = new PokeApiService();
