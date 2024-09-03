import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BuscarPokemon from "./BuscarPokemon";
import PokemonCard from "./PokemonCard";
 
class PokemonApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: null,
      error: null,
    };
  }
 
  handleSearchClick = async (query) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
      if (!response.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const data = await response.json();
      this.setState({ pokemonData: data, error: null });
    } catch (error) {
      this.setState({ pokemonData: null, error: error.message });
    }
  };
 
  render() {
    return (
<Container>
<div className="d-flex flex-row justify-content-center alig-items-center">
    <img src="https://fontmeme.com/permalink/240903/963d59d143580fdc3cfe44ab0f94fa4b.png" className="" alt="Pokedex"/>
</div>
<BuscarPokemon onSearchClick={this.handleSearchClick} />
        {this.state.error && (
<div className="text-center text-danger">
            {this.state.error}
</div>
        )}
        {this.state.pokemonData && (
<PokemonCard pokemon={this.state.pokemonData} />
        )}
</Container>
    );
  }
}
 
export default PokemonApp;