import axios from 'react-native-axios';

const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' }); // url da API

const PokeApi = {

  pokemons: () => api.get('/pokemon?limit=386&offset=0'), // this is a function object
  // pokemons: function(){return api.get('/')} //other form to write it
  // pokemons() { return api.get('/') } //another one
  pokemons1gn: () => api.get('/pokemon?limit=151&offset=0'),
  pokemons2gn: () => api.get('/pokemon?limit=100&offset=151'),
  pokemons3gn: () => api.get('/pokemon?limit=135&offset=251'),

};

export default PokeApi;
