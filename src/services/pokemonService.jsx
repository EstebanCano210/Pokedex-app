
export const fetchPokemonDescription = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Buscar la descripción en inglés
    const flavorTextEntry = data.flavor_text_entries.find(
      entry => entry.language.name === 'es'
    );
    return flavorTextEntry ? flavorTextEntry.flavor_text : 'No description available';
  } catch (error) {
    throw new Error(error.message);
  }
};
