import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, Text, Header, Content, Item, Icon, Input, Button, Footer, FooterTab, Spinner,
} from 'native-base';
import PokeApi from './api';
import PokemonGen from './Components/PokemonGen/PokemonGen';
import PokemonGen2 from './Components/PokemonGen/PokemonGen2';
import PokemonGen3 from './Components/PokemonGen/PokemonGen3';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFindSearchBar, setPokemonFindSearchBar] = useState([]);
  const [selectedTab, setSelectedTab] = useState('1st');

  async function fetchPokes() {
    const response = await PokeApi.pokemons();
    setPokemon(response.data.results);
  }

  useEffect(() => {
    fetchPokes();
    onChangeText();
  }, []);

  useEffect(() => {
    onChangeText();
  }, [selectedTab]);

  function onChangeText(text) {
    if (text == '' || text == ' ' || !text) {
      setPokemonFindSearchBar('');
    } else {
      setPokemonFindSearchBar(pokemon.filter((todo) => todo.name.includes(text)));
    }
  }

  function renderSelectedTab() {
    switch (selectedTab) {
      case '1st':
        return (<PokemonGen pokemonFindSearchBar={pokemonFindSearchBar} />);
        break;
      case '2nd':
        return (<PokemonGen2 pokemonFindSearchBar={pokemonFindSearchBar} />);
        break;
      case '3rd':
        return (<PokemonGen3 pokemonFindSearchBar={pokemonFindSearchBar} />);
        break;
      default:
    }
  }

  return (

    <>

      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={(text) => onChangeText(text.toLowerCase())} />

        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>

      {renderSelectedTab()}

      <Footer>
        <FooterTab>
          <Button
            active={selectedTab === '1st'}
            onPress={() => setSelectedTab('1st')}
          >
            <Text>First Gen</Text>
          </Button>

          <Button
            active={selectedTab === '2nd'}
            onPress={() => setSelectedTab('2nd')}
          >
            <Text>Second Gen</Text>
          </Button>

          <Button
            active={selectedTab === '3rd'}
            onPress={() => setSelectedTab('3rd')}
          >
            <Text>Third Gen</Text>
          </Button>

        </FooterTab>
      </Footer>

    </>

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
