import {useEffect, useState} from 'react';
import './App.css';
import FormularioPokemon from './Componentes/FormularioPokemon/FormularioPokemon';
import Pokemon from './Componentes/Pokemon/Pokemon';
import axios from 'axios';


function App() {
  // const [nombrePokemon, setNombrePokemon] = useState('');
  const [listaPokemon, setListaPokemon] = useState([]);
  const [search, setSearch] = useState(false);

  // const buscarPokemon = (event) => {
  //   event.preventDefault();
  //   setNombrePokemon( (nombrePrev) => event.target.nombrePokemon.value )
  // }

  useEffect( () => {

    if(search !== false){

      // fetch(`https://pokeapi.co/api/v2/pokemon`)
      
      // .then( respuesta => {
      //   if(respuesta.ok){
      //     return respuesta.json();
      //   }
      // })
      // .then( datos => {
      //   // console.log(datos);
      //   setListaPokemon( datos.results)
      // })
      // .catch( err => {
      //   console.log(err);
      // })

      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(respuesta => {
        setListaPokemon( respuesta.data.results )
        console.log(respuesta)
  
      })
      .catch( err => {
        console.log(err);
      })

  }},[search])

  return (
    <div>

      <button onClick={() => setSearch(true)}>Muestra tu pokemon</button>    
      {
        listaPokemon.map( (pokemon, index) => {
          return(
            <div key={'pokemon_'+index}> {pokemon.name} </div>
          )
        } )
      }

      {/* <FormularioPokemon buscarPokemon={buscarPokemon} />
      {
        listaPokemon.map( (pokemon,indice) => {
          console.log("Imprime un pokemon "+pokemon)
          return(
          <Pokemon key={'pokemon_'+indice} pokemon={pokemon} />
          )
        })
      } */}

    </div>
  );
}

export default App;
