import React from 'react';
import { Card, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import useDescPokemon from '../hooks/useDescPokemon'; 
import { statTranslations, typeTranslations } from '../utils/translations'; 
import { typeColors } from '../utils/typeColors'; 

const PokemonCard = ({ pokemon }) => {
  const { description, loading, error } = useDescPokemon(pokemon);

  if (!pokemon) {
    return <p>Loading...</p>;
  }


  const backgroundColor = pokemon.types.length > 0
    ? typeColors[pokemon.types[0].type.name] || '#ffffff'
    : '#ffffff';

  return (
    <Card className='mt-4'>
      <Card.Body>
        <Row>
          <Col md={4} style={{ backgroundColor: backgroundColor, padding: '1em', borderRadius: '0.5em' }}>
            <Card.Img 
              variant="top" 
              src={pokemon.sprites.other['official-artwork'].front_default} 
              alt={pokemon.name} 
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </Col>
          <Col md={8}>
            <Card.Title className='fs-2'>{pokemon.name}</Card.Title>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Altura:</strong> {pokemon.height / 10} m<br />
                <strong>Peso:</strong> {pokemon.weight / 10} kg
              </ListGroupItem>
              <ListGroupItem>
                <strong>Tipo:</strong> 
                {pokemon.types.map(type => (
                  <span
                    key={type.type.name}
                    style={{ 
                      backgroundColor: typeColors[type.type.name] || '#ffffff', 
                      color: '#fff', 
                      padding: '0.2em 0.5em', 
                      borderRadius: '0.3em', 
                      marginRight: '0.5em' 
                    }}
                  >
                    {typeTranslations[type.type.name] || type.type.name}
                  </span>
                ))}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Habilidades:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Estadísticas:</strong>
                <div style={{ padding: '0.5em', backgroundColor: '#f8f9fa', borderRadius: '0.5em' }}>
                  {pokemon.stats.map(stat => (
                    <div key={stat.stat.name} style={{ marginBottom: '0.3em' }}>
                      <strong style={{ fontSize: '0.9em' }}>
                        {statTranslations[stat.stat.name] || stat.stat.name}:
                      </strong>
                      <div style={{ position: 'relative', height: '1em', width: '100%', maxWidth: '200px', backgroundColor: '#e9ecef', borderRadius: '0.5em' }}>
                        <div 
                          style={{
                            width: `${stat.base_stat}%`,
                            backgroundColor: '#007bff',
                            height: '100%',
                            borderRadius: '0.5em',
                            color: '#fff',
                            textAlign: 'center',
                            lineHeight: '1em',
                            fontSize: '0.75em',
                            position: 'absolute',
                            top: 0,
                            left: 0
                          }}
                        >
                          {stat.base_stat}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <strong>Descripción:</strong>
                {loading ? <p>Loading description...</p> : error ? <p>{error}</p> : <p>{description}</p>}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
