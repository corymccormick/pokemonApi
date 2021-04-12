import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { sandboxApi } from "./AxiosService.js";

class SandPokemonsService {
  async getAll() {
    let resolve = await sandboxApi.get('')
    ProxyState.myPokemons = resolve.data.map(s => new Pokemon(s))
  }
}


export const sandPokemonsService = new SandPokemonsService();
