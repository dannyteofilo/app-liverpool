import Header from "../../components/Header/Header"
import { Skeleton } from "../../components/Skeleton/Skeleton";
import Character from "../../interfaces/character";
import { useGetCharactersQuery } from "../../redux/api/characters";
import { generateNumberRandom } from "../../utils/common";

const Home = () => {

    const randoms = generateNumberRandom({
        min: 1,
        max: 826,
        total: 8,
    }).toString();
    const { data = [], isFetching } = useGetCharactersQuery([1, 2, 3, 5, 4, 7, 3]);
    console.log('data: ', data)

    return (
        <>
            <div className="flex flex-col h-full w-full">
                <Header isLoggedIn={true}/>
                <div className="flex justify-center items-center overflow-auto  h-full">
                    {
                        isFetching ?
                            <Skeleton />
                            : <div className="grid grid-cols-1 mt-20 pb-10 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {data.map((character: Character) => (
                                    <div key={character.id} className="card w-96 glass">
                                        <figure>
                                            <img src={character.image} alt={character.name} />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{character.name}</h2>
                                            <p>Status: {character.status}</p>
                                            <p>Species: {character.species}</p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Detalle</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Home