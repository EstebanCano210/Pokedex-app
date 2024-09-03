import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
 
const BuscarPokemon = ({ onSearchClick }) => {
  const [query, setQuery] = useState('');
 
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
 
  const handleSearchClick = () => {
    if (query.trim()) {
      onSearchClick(query.toLowerCase());
    }
  };
 
  return (
<Form className="d-flex flex-row justify-content-center alig-items-center mt-4">
<Form.Control
        type="text"
        placeholder="Buscar Pokémon"
        value={query}
        onChange={handleInputChange}
        className="me-2 w-25 "
      />
<Button variant="primary" onClick={handleSearchClick}>
        Buscar
</Button>
</Form>
  );
};
 
export default BuscarPokemon;