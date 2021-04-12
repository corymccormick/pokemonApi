export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/cory/pokemon',
  timeout: 3000
})

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 3000
})

