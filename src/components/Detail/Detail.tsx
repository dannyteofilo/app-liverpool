import React from 'react';
import Character from '../../interfaces/character';

interface DetailProps {
    character: Character;
}

const Detail: React.FC<DetailProps> = ({ character }) => {
    const showModalById = (id: string) => {
        const modalElement = document.getElementById(id);
        if (modalElement instanceof HTMLDialogElement) {
            modalElement.showModal();
        }
    };

    const closeModalById = (id: string) => {
        const modalElement = document.getElementById(id);
        if (modalElement instanceof HTMLDialogElement) {
            modalElement.close();
        }
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={() => showModalById('my_modal')}>
                Detalle
            </button>
            <dialog id="my_modal" className="modal">
                <div className="modal-box p-6">
                    <h3 className="font-bold text-2xl mb-4">{character.name}</h3>
                    <div className="mb-4">
                        <img src={character.image} alt={character.name} style={{ maxWidth: '100%', borderRadius: '8px' }} />
                    </div>
                    <p className="text-lg mb-2">
                        <strong>Status:</strong> {character.status}
                    </p>
                    <p className="text-lg mb-2">
                        <strong>Species:</strong> {character.species}
                    </p>
                    {character.type && (
                        <p className="text-lg mb-2">
                            <strong>Type:</strong> {character.type}
                        </p>
                    )}
                    <p className="text-lg mb-2">
                        <strong>Gender:</strong> {character.gender}
                    </p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button
                        className="btn btn-outline btn-square absolute top-2 right-2"
                        onClick={() => closeModalById('my_modal')}
                    >
                        Cerrar
                    </button>
                </form>
            </dialog>
        </div>
    );
};

export default Detail;
