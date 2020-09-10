import React, { useEffect, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Container, Text, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Badge, Grid, Col, Row} from 'native-base';
import axios from 'react-native-axios'


const Pokemon = (props) => {

    const [pokeSprite, setPokeSprite] = useState ('')
    const [pokeID, setPokeID] = useState ('')
    const [pokeType, setPokeType] = useState('')
    const [pokeType2, setPokeType2] = useState('')
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')

        useEffect(()=>{

           
            axios.get(props.url).then(function (res) {
                setPokeSprite(res.data.sprites.front_default)
                setPokeID(res.data.id)
                setPokeType(res.data.types[0].type.name)

                //check if there's a type2
                if(!res.data.types[1]){
                    setPokeType2('')
                }
                else{
                    setPokeType2(res.data.types[1].type.name)
                }
                
              })

              colorChange()

        },[pokeType, pokeType2])



        function colorChange (){
            

                    pokeType == 'normal' ? setColor1('#E7A652') : null
                    pokeType == 'fighting' ? setColor1('#C03028') : null
                    pokeType == 'flying' ? setColor1('#A890F0') : null
                    pokeType == 'ground' ? setColor1('#E0C068') : null
                    pokeType == 'rock' ? setColor1('#B8A038') : null
                    pokeType == 'bug' ? setColor1('#A8B820') : null
                    pokeType == 'ghost' ? setColor1('#705898') : null
                    pokeType == 'steel' ? setColor1('#B8B8D0') : null
                    pokeType == 'fire' ? setColor1('rgb(240,128,48)') : null
                    pokeType == 'water' ? setColor1('#6890F0') : null
                    pokeType == 'grass' ? setColor1('rgb(120,200,80)') : null
                    pokeType == 'electric' ? setColor1('rgb(248,208,48)') : null
                    pokeType == 'psychic' ? setColor1('rgb(248,88,136)') : null
                    pokeType == 'ice' ? setColor1('rgb(152,216,216)') : null
                    pokeType == 'dragon' ? setColor1('rgb(112,56,248)') : null
                    pokeType == 'dark' ? setColor1('rgb(112,88,72)') : null
                    pokeType == 'fairy' ? setColor1('#EE99AC') : null
                    pokeType == 'poison' ? setColor1('rgb(160,64,160)') : null
                    ////type 2
                    pokeType2 == 'normal' ? setColor2('#E7A652') : null
                    pokeType2 == 'fighting' ? setColor2('#C03028') : null
                    pokeType2 == 'flying' ? setColor2('#A890F0') : null
                    pokeType2 == 'ground' ? setColor2('#E0C068') : null
                    pokeType2 == 'rock' ? setColor2('#B8A038') : null
                    pokeType2 == 'bug' ? setColor2('#A8B820') : null
                    pokeType2 == 'ghost' ? setColor2('#705898') : null
                    pokeType2 == 'steel' ? setColor2('#B8B8D0') : null
                    pokeType2 == 'fire' ? setColor2('rgb(240,128,48)') : null
                    pokeType2 == 'water' ? setColor2('#6890F0') : null
                    pokeType2 == 'grass' ? setColor2('rgb(120,200,80)') : null
                    pokeType2 == 'electric' ? setColor2('rgb(248,208,48)') : null
                    pokeType2 == 'psychic' ? setColor2('rgb(248,88,136)') : null
                    pokeType2 == 'ice' ? setColor2('rgb(152,216,216)') : null
                    pokeType2 == 'dragon' ? setColor2('rgb(112,56,248)') : null
                    pokeType2 == 'dark' ? setColor2('rgb(112,88,72)') : null
                    pokeType2 == 'fairy' ? setColor2('#EE99AC') : null
                    pokeType2 == 'poison' ? setColor2('rgb(160,64,160)') : null
                    pokeType2 == '' ? setColor2('null') : null
                    
                  
            
        }

        

        return (
        <>
            <List>
            <ListItem thumbnail>
            <Left>
            <Badge info ><Text>{pokeID}</Text></Badge> 
            </Left>
           
            <Body> 
            <Grid >
                     <Row >                    
                    <Thumbnail square source={{ uri: `${pokeSprite}` }} />   
                     <Text style={{paddingLeft: 2}}> {props.name.charAt(0).toUpperCase() + props.name.slice(1)}</Text>
                    <Col ></Col>
                 
                 <Col style={{ alignItems:'center', maxWidth: 100}}><Badge style={{ backgroundColor: `${color1}`, marginBottom: 10 }}><Text>{pokeType.toUpperCase()}</Text></Badge>                 
                 <Badge style={{ backgroundColor: `${color2}` }}><Text>{pokeType2.toUpperCase()}</Text></Badge></Col>
                  </Row>
                  </Grid>
                  
                  
                  
                   
            </Body>
            
            </ListItem>
        </List>
        </>
        )
}

const styles = StyleSheet.create({
    
    green: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
  });
 
export default Pokemon