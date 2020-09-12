import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet  } from 'react-native';
import { Container, Text, Header, Content, Item, Icon, Input, Button, Spinner} from 'native-base';
import PokeApi from '../../api'
import Pokemon from '../PokemonGenList/Pokemon'

 function PokemonGen(props) {

    const [pokemon, setPokemon] = useState([])
    


    async function fetchPokes(){
      const response = await PokeApi.pokemons1gn()
      setPokemon(response.data.results)
      
      
    }

    useEffect(()=>{          
            fetchPokes()  
            
      
    },[])

    
    
    function pokemonLoad(){
        if (pokemon.length < 100){
          console.log('load')
          return (<Spinner color='blue' />)
        }      
           
      }



      if (!props.pokemonFindSearchBar) { //if search bar is empty
        return (

              
            <Container>
            <Content>
            
             
              {pokemonLoad()}

              
              
              {pokemon.map((todo)=>
   
                 <Pokemon name={todo.name} url={todo.url} key={todo.url} />
   
               )}
             
           </Content>
         </Container>
   
              

        )

    }

    
  else{
  return (
    
    <Container>
         <Content>
         
          
           {pokemonLoad()}
           
           {props.pokemonFindSearchBar.map((todo)=>

              <Pokemon name={todo.name} url={todo.url} key={todo.url} />

            )}
          
        </Content>
      </Container>

      
  )
           }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default PokemonGen