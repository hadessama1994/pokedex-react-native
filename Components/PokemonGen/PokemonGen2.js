import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet  } from 'react-native';
import { Container, Text, Header, Content, Item, Icon, Input, Button, Spinner} from 'native-base';
import PokeApi from '../../api'
import Pokemon from '../PokemonGenList/Pokemon'

export default function PokemonGen2(props) {

    const [pokemon, setPokemon] = useState([])
    

    async function fetchPokes(){
      const response = await PokeApi.pokemons2gn()
      setPokemon(response.data.results)
    }

    useEffect(()=>{

        pokemonLoad()  
      fetchPokes();
     
      
    },[])
    
    function pokemonLoad(){
        if (pokemon.length < 100){
          
          return <Spinner color='blue' />
        }
        
      }

      
  return (
    <>
    <Container>
         <Content>
         
          
         {pokemonLoad()}
           {pokemon.map((todo)=>

              <Pokemon name={todo.name} url={todo.url} key={todo.url} />

            )}
          
        </Content>
      </Container>

      </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
