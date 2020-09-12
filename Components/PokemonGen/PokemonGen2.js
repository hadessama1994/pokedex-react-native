import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Content, Spinner,
} from 'native-base';
import PokeApi from '../../api';
import Pokemon from '../PokemonGenList/Pokemon';

function PokemonGen2(props) {
  const [pokemon, setPokemon] = useState([]);

  async function fetchPokes() {
    const response = await PokeApi.pokemons2gn();
    setPokemon(response.data.results);
  }

  useEffect(() => {
    fetchPokes();
  }, []);

  function pokemonLoad() {
    if (pokemon.length < 100) {
      console.log('load');
      return (<Spinner color="blue" />);
    }
  }

  if (!props.pokemonFindSearchBar) { // if search bar is empty
    return (

      <Container>
        <Content>

          {pokemonLoad()}

          {pokemon.map((todo) => <Pokemon name={todo.name} url={todo.url} key={todo.url} />)}

        </Content>
      </Container>

    );
  }

  return (

    <Container>
      <Content>

        {pokemonLoad()}

        {props.pokemonFindSearchBar.map((todo) => <Pokemon name={todo.name} url={todo.url} key={todo.url} />)}

      </Content>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PokemonGen2;
