import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=870")
        .then(response => response.json())
        .then(response => setPoke(response.results))
    }, []);
    return (
        <ol>
            { poke.length > 0 && poke.map((item, index)=>{
                return(<li key={index}>{item.name} {item.type}</li>)
            })}
        </ol>
    );
    
}
export default Pokemon;