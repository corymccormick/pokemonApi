import SandPokemonsController from "./Controllers/SandPokemonsController.js";
import PokeApiController from "./Controllers/pokeApiController.js";

class App {
  sandPokemonsController = new SandPokemonsController();
  pokeApiController = new PokeApiController();
}

window["app"] = new App();
