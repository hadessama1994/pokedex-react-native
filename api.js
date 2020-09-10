import axios from 'react-native-axios'

const api = axios.create({baseURL: 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'}) //url da API

const PokeApi = {
    
    pokemons: () => api.get('/') //this is a function object
    //pokemons: function(){return api.get('/')} //other form to write it
   // pokemons() { return api.get('/') } //another one
    
    
}

export default PokeApi