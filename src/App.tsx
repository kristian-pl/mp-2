import RickAndMorty from "./components/RickAndMorty.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Character} from "./types/Characters.ts";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://rickandmortyapi.com/api/character");
            const {results} : {results: Character[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Success!"))
            .catch((e: Error) => console.log("Error Found: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <RickAndMorty data={data}/>
        </ParentDiv>
    )
}