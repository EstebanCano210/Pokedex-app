import { useState, useEffect } from 'react';
import { fetchPokemonDescription } from '../services/pokemonService';

const useDescPokemon = (pokemon) => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (pokemon) {
      const fetchDescription = async () => {
        try {
          const descriptionText = await fetchPokemonDescription(pokemon.id);
          setDescription(descriptionText);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchDescription();
    }
  }, [pokemon]);

  return { description, loading, error };
};

export default useDescPokemon;
