import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button  } from 'react-native';
import { Container, Text, Header, Content, List, ListItem, Left, Body, Right, Thumbnail} from 'native-base';
import PokeApi from './api'
import Pokemon from './Components/Pokemon'

export default function App() {

    const [pokemon, setPokemon] = useState([])

    async function fetchPokes(){
      const response = await PokeApi.pokemons()
      setPokemon(response.data.results)
    }

    useEffect(()=>{
      fetchPokes();
    },[])
    console.log(pokemon)
    
  return (
    <>
    <Container>
         <Content>
           <Header />
           
           {pokemon.map((todo, key)=>

              <Pokemon name={todo.name} url={todo.url} />

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
