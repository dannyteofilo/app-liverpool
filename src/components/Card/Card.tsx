import React from 'react';
import Character from '../../interfaces/character';

const Card: React.FC<Character> = ({ id, name, image, status, species }) => {
    return (
        <div key={id} className="card w-96 glass">
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>#: {id}</p>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Detalle</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
