import { ProxyState } from "../AppState.js";
import { sandPokemonsService } from "../Services/sandPokemonsService.js";


//Private
function _draw() {
  console.log();
}

//Public
export default class sandPokemonsController {
  constructor() {
    ProxyState.on("myPokemons", _draw);

    this.getAllPokemons()
  }
  async getAllPokemons() {
    try {
      await sandPokemonsService.getAll()
    } catch (error) {
      console.log(error);
    }
  }

}


