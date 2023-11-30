import React from 'react';
import Character from '../../interfaces/character';
import Detail from '../Detail/Detail';

interface CardProps {
    character: Character;
}

const Card: React.FC<CardProps> = ({character}) => {
    return (
        <div key={character.id} className="card w-96 glass">
            <figure>
                <img src={character.image} alt={character.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{character.name}</h2>
                <p>#: {character.id}</p>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <div className="card-actions justify-end"> 
                    <Detail character={character}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
