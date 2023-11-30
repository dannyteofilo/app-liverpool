import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Character from "../../interfaces/character";
import { useGetCharactersQuery } from "../../redux/api/characters";
import { useSelector } from "react-redux";

const Home = () => {
    const { searchText } = useSelector((state: any) => state.search);
    const [currentPage, setCurrentPage] = useState(1);
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);

    const { data, isFetching } = useGetCharactersQuery(currentPage);

    const handleLoadMore = () => {
        setCurrentPage((prev) => prev + 1);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageHeight = document.body.offsetHeight;
            if (scrollPosition >= pageHeight && !isFetching) {
                handleLoadMore();
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isFetching]);

    useEffect(() => {
        if (data) {
            const uniqueCharacters = new Set<Character>([
                ...allCharacters,
                ...data.results,
            ]);

            setAllCharacters(Array.from(uniqueCharacters));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        if (data) {
            const newCharacters = searchText
                ? data.results.filter(
                    (character: Character) =>
                        character.name.toLowerCase().includes(searchText.toLowerCase())
                )
                : data.results;

            setAllCharacters(newCharacters);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchText]);

    return (
        <>
            <div className="flex flex-col h-full w-full">
                <div className="flex justify-center items-center overflow-auto  h-full">
                    <div className="grid grid-cols-1 mt-20 pb-10 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {allCharacters.map((character: Character) => (
                            <Card key={character.id} {...character} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
