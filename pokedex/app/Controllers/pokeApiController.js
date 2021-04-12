import { ProxyState } from "../AppState.js";
import { pokemonApi } from "../Services/AxiosService.js";
import { pokeApiService } from "../Services/pokeApiService.js";


//Private
function _draw() {
  let template = ""
  ProxyState.apiPokemons.forEach(p => {
    template += `<li class="action hover-action" onclick="app.pokeApiController.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById('api-pokemons').innerHTML = template
}


//Public
export default class sandPokemonsController {
  constructor() {
    ProxyState.on("apiPokemons", _draw);

    this.getAllApi()
  }
  async getAllApi() {
    try {
      await pokeApiService.getAllPokemons()
    } catch (error) {
      console.log(error);
    }
  }

  async getPokemon(name) {
    try {
      await pokeApiService.getPokemon(name)
    } catch (error) {
      console.log(error);
    }
  }
}

