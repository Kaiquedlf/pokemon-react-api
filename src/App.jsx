import { useState, useEffect } from 'react';

/*
Consuma a API e liste todos os pokemons da consulta do seguinte endpoint. 
https://pokeapi.co/api/v2/pokemon

Você deve exibir, de cada pokémon:
- imagem
- nome
- experiência

Você pode acessar as informações de cada pokemón individualmente em:
https://pokeapi.co/api/v2/pokemon/:id


DICA:
imagem => sprites.front_default
experiência => base_experience

EXTRA: se puder ordene por nome.
*/

function App() {
  const [list, setList] = useState([])

  useEffect(function() {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res => res.json())
    .then(data => setList(data.results))
  }, [])
 
  

  return (
    <>
      <h3>desafio fernandev</h3>
      <h1>consumir api pokémon</h1>

      {list.map(poke => 
      <Pokemon key={poke.name} data={poke}/>)}
    </>
  );
}

function Pokemon (props){
    const [pokemon, setPokemon] = useState(null)

    useEffect(function() {
      fetch(props.data.url)
      .then(res => res.json())
      .then(data => setPokemon(data))
    }, [])
  

    if(pokemon === null) {
      return <div>-</div>
    }

  return(
    <div className='pokemons'>
      <img src={pokemon.sprites.front_default}></img>
      <p><strong>{pokemon.name}</strong></p>
      <p> EXP: {pokemon.base_experience}</p>
    </div>
  )
}

export default App;